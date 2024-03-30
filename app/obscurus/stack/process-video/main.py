import boto3
import os
import time
import cv2
import numpy as np
from moviepy.editor import *
from moviepy.editor import VideoFileClip, AudioFileClip, CompositeAudioClip
from fastapi import (
    FastAPI,
    UploadFile,
    File,
    Form,
    HTTPException,
    WebSocket,
    Request,
    BackgroundTasks,
)
import requests
import json
import subprocess
import websockets
import asyncio

# Configure AWS clients
rekognition = boto3.client("rekognition")
s3 = boto3.client("s3")
print("init")
# ENVIRONMENT VARIABLES
bucket_name = os.environ["BUCKET_NAME"]
api_url = os.environ["API_URL"]
ws_api_url = os.environ["WS_API_URL"]
rekognition = boto3.client("rekognition")
s3 = boto3.client("s3")


def anonymize_face_pixelate(image, blocks=10):
    """
    Computes a pixelated blur with OpenCV
    Args:
        image (ndarray): The image to be blurred
        blocks (int): Number of pixel blocks (default is 10)
    Returns:
        image (ndarray): The blurred image
    """
    # divide the input image into NxN blocks
    (h, w) = image.shape[:2]
    x_coordinates, y_coordinates = np.linspace(
        0, w, blocks + 1, dtype="int"
    ), np.linspace(0, h, blocks + 1, dtype="int")

    # loop over the blocks along x and y axis
    for i in range(1, len(y_coordinates)):
        for j in range(1, len(x_coordinates)):
            # compute the first and last (x, y)-coordinates for the current block
            first_x, last_x = x_coordinates[j - 1], x_coordinates[j]
            first_y, last_y = y_coordinates[i - 1], y_coordinates[i]
            # extract the ROI
            roi = image[first_y:last_y, first_x:last_x]
            # compute the mean of the ROI
            (b, g, r) = [int(x) for x in cv2.mean(roi)[:3]]
            # draw a rectangle with the mean RGB values over the ROI in the original image
            cv2.rectangle(image, (first_x, first_y), (last_x, last_y), (b, g, r), -1)

    # return the pixelated blurred image
    return image


def apply_faces_to_video(
    final_timestamps,
    local_path_to_video,
    local_output,
    video_metadata,
    color=(255, 0, 0),
    thickness=2,
):
    # Extract video info
    frame_rate = video_metadata["FrameRate"]
    frame_height = video_metadata["FrameHeight"]
    frame_width = video_metadata["FrameWidth"]
    width_delta = int(frame_width / 250)
    height_delta = int(frame_height / 100)
    # Set up support for OpenCV
    frame_counter = 0
    fourcc = cv2.VideoWriter_fourcc("M", "J", "P", "G")
    # Create the file pointers
    v = cv2.VideoCapture(local_path_to_video)
    print("VideoCapture - local path to video")
    out = cv2.VideoWriter(
        filename=local_output,
        fourcc=fourcc,
        fps=int(frame_rate),
        frameSize=(frame_width, frame_height),
    )
    # Open the video
    while v.isOpened():
        has_frame, frame = v.read()
        if has_frame:
            for t in final_timestamps:
                faces = final_timestamps.get(t)
                lower_bound = int(int(t) / 1000 * frame_rate)
                upper_bound = int(int(t) / 1000 * frame_rate + frame_rate / 2) + 1
                if (frame_counter >= lower_bound) and (frame_counter <= upper_bound):
                    for f in faces:
                        x = int(f["Left"] * frame_width) - width_delta
                        y = int(f["Top"] * frame_height) - height_delta
                        w = int(f["Width"] * frame_width) + 2 * width_delta
                        h = int(f["Height"] * frame_height) + 2 * height_delta

                        x1, y1 = x, y
                        x2, y2 = x1 + w, y1 + h

                        to_blur = frame[y1:y2, x1:x2]
                        blurred = anonymize_face_pixelate(to_blur, blocks=10)
                        frame[y1:y2, x1:x2] = blurred

                        # frame = cv2.rectangle(frame, (x,y), (x+w,y+h), (255,0,0), 3)
            out.write(frame)
            frame_counter += 1
        else:
            break

    out.release()
    v.release()
    # cv2.destroyAllWindows()
    print(f"Complete. {frame_counter} frames were written.")


def integrate_audio(original_video, output_video, audio_path="/tmp/audio.mp3"):

    # Extract audio
    print("original_video", original_video)
    my_clip = VideoFileClip(original_video)
    my_clip.audio.write_audiofile(audio_path)
    temp_location = "{}-processed.mp4".format(original_video)

    # Join output video with extracted audio

    print("output_video", output_video)
    print("temp_location", temp_location)
    videoclip = VideoFileClip("{}".format(output_video))
    audioclip = AudioFileClip(audio_path)

    new_audioclip = CompositeAudioClip([audioclip])
    videoclip.audio = new_audioclip
    videoclip.write_videofile(temp_location, codec="libx264", audio_codec="aac")

    os.rename(temp_location, output_video)
    # Delete audio
    os.remove(audio_path)

    print("Complete")


def start_face_detection(key):
    print("Running face detection...")
    response = rekognition.start_face_detection(
        Video={"S3Object": {"Bucket": bucket_name, "Name": key}},
    )
    return response["JobId"]


def check_job_status(job_id):
    print("Checking submission status...")
    while True:
        response = rekognition.get_face_detection(JobId=job_id)
        status = response["JobStatus"]
        if status in ["SUCCEEDED", "FAILED"]:
            return response
        time.sleep(5)


def get_timestamps_and_faces(job_id, reko_client=None):
    print("Getting timestamps and faces...")
    final_timestamps = {}
    next_token = None
    first_round = True
    while next_token or first_round:
        print(".", end="")
        first_round = False
        # Query Rekognition for face detection results
        response = reko_client.get_face_detection(
            JobId=job_id,
            MaxResults=100,
            NextToken=next_token if next_token else "",
        )
        # Iterate over each face detected and organize by timestamp
        for face in response["Faces"]:
            f = face["Face"]["BoundingBox"]
            t = str(face["Timestamp"])
            if t not in final_timestamps:
                final_timestamps[t] = []
            final_timestamps[t].append(f)
        # Get next token for pagination
        next_token = response.get("NextToken", None)
    print("Complete")
    return final_timestamps, response


def convert_to_mp4(input_video, output_video):
    """
    Converts any video format to MP4 using FFmpeg.
    Args:
        input_video (str): Path to the source video.
        output_video (str): Path where the output (MP4) video will be saved.
    """
    cmd = [
        "ffmpeg",
        "-i",
        input_video,
        "-c:v",
        "libx264",
        "-crf",
        "23",
        "-preset",
        "medium",
        "-c:a",
        "aac",
        "-strict",
        "-2",
        "-movflags",
        "+faststart",
        output_video,
    ]
    subprocess.run(cmd, check=True)


def process_video(timestamps, response, submission_id):
    print("Processing video...")
    input_name = f"{submission_id}.mp4"
    output_name = f"{submission_id}-processed.mp4"
    local_filename = "/tmp/{}".format(submission_id)
    temp_output_filename = "/tmp/{}-temp.mp4".format(submission_id)
    final_output_filename = "/tmp/{}-processed.mp4".format(submission_id)

    s3.download_file(bucket_name, input_name, local_filename)
    print("Job response", response)

    apply_faces_to_video(
        timestamps, local_filename, temp_output_filename, response["VideoMetadata"]
    )

    os.rename(temp_output_filename, final_output_filename)

    print("Integrating audio with video...")
    integrate_audio(local_filename, final_output_filename)

    print("Uploading processed video to S3...")
    s3.upload_file(final_output_filename, bucket_name, output_name)
    print("Output file uploaded to S3")
    return "Completed processing!"


def update_status(status, submission_id):
    try:
        requests.post(
            f"{api_url}/updateStatus",
            json={
                "submissionId": submission_id,
                "status": status,
            },
        )

    except Exception as error:
        print("Error updating status:", error)


app = FastAPI()


async def update_submission_status(submission_id: str, status: str):
    async with websockets.connect(ws_api_url) as websocket:
        message = json.dumps(
            {
                "action": "updateSubmissionStatus",
                "data": {"status": status, "submissionId": submission_id},
            }
        )
        await websocket.send(message)
        print(
            f"WebSocket message sent for submission {submission_id} with status {status}"
        )


async def send_email_notification(email: str, subject: str, body: str):
    ses_client = boto3.client("ses", region_name="us-west-2")
    ses_client.send_email(
        Source="no-reply@obscurus.me",
        Destination={"ToAddresses": [email]},
        Message={
            "Subject": {"Data": subject},
            "Body": {
                "Html": {
                    "Data": '<!doctype html>\r\n<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\r\n\r\n<head>\r\n  <title>\r\n  </title>\r\n  <!--[if !mso]><!-->\r\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\r\n  <!--<![endif]-->\r\n  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\r\n  <meta name="viewport" content="width=device-width, initial-scale=1">\r\n  <style type="text/css">\r\n    #outlook a {\r\n      padding: 0;\r\n    }\r\n\r\n    body {\r\n      margin: 0;\r\n      padding: 0;\r\n      -webkit-text-size-adjust: 100%;\r\n      -ms-text-size-adjust: 100%;\r\n    }\r\n\r\n    table,\r\n    td {\r\n      border-collapse: collapse;\r\n      mso-table-lspace: 0pt;\r\n      mso-table-rspace: 0pt;\r\n    }\r\n\r\n    img {\r\n      border: 0;\r\n      height: auto;\r\n      line-height: 100%;\r\n      outline: none;\r\n      text-decoration: none;\r\n      -ms-interpolation-mode: bicubic;\r\n    }\r\n\r\n    p {\r\n      display: block;\r\n      margin: 13px 0;\r\n    }\r\n  </style>\r\n  <!--[if mso]>\r\n        <noscript>\r\n        <xml>\r\n        <o:OfficeDocumentSettings>\r\n          <o:AllowPNG/>\r\n          <o:PixelsPerInch>96</o:PixelsPerInch>\r\n        </o:OfficeDocumentSettings>\r\n        </xml>\r\n        </noscript>\r\n        <![endif]-->\r\n  <!--[if lte mso 11]>\r\n        <style type="text/css">\r\n          .mj-outlook-group-fix { width:100% !important; }\r\n        </style>\r\n        <![endif]-->\r\n  <!--[if !mso]><!-->\r\n  <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">\r\n  <style type="text/css">\r\n    @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);\r\n  </style>\r\n  <!--<![endif]-->\r\n  <style type="text/css">\r\n    @media only screen and (min-width:480px) {\r\n      .mj-column-per-50 {\r\n        width: 50% !important;\r\n        max-width: 50%;\r\n      }\r\n    }\r\n  </style>\r\n  <style media="screen and (min-width:480px)">\r\n    .moz-text-html .mj-column-per-50 {\r\n      width: 50% !important;\r\n      max-width: 50%;\r\n    }\r\n  </style>\r\n  <style type="text/css">\r\n    @media only screen and (max-width:480px) {\r\n      table.mj-full-width-mobile {\r\n        width: 100% !important;\r\n      }\r\n\r\n      td.mj-full-width-mobile {\r\n        width: auto !important;\r\n      }\r\n    }\r\n  </style>\r\n</head>\r\n\r\n<body style="word-spacing:normal;background-color:#ffffff;">\r\n  <div style="background-color:#ffffff;">\r\n    <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->\r\n    <div style="margin:0px auto;max-width:600px;">\r\n      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">\r\n        <tbody>\r\n          <tr>\r\n            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">\r\n              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr></tr></table><![endif]-->\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->\r\n    <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">\r\n      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">\r\n        <tbody>\r\n          <tr>\r\n            <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">\r\n              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:300px;" ><![endif]-->\r\n              <div class="mj-column-per-50 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">\r\n                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">\r\n                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">\r\n                          <tbody>\r\n                            <tr>\r\n                              <td style="width:150px;">\r\n                                <a href="https://obscurus.me" target="_blank">\r\n                                  <img alt="" height="auto" src="https://obscurus-branding-images.s3.us-west-2.amazonaws.com/logo.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="150" />\r\n                                </a>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">\r\n                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:50px;font-style:GeistSans;line-height:1;text-align:center;color:#0F172A;">obscurus</div>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">\r\n                        <p style="border-top:dashed 1px #0F172A;font-size:1px;margin:0px auto;width:100%;">\r\n                        </p>\r\n                        <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:dashed 1px #0F172A;font-size:1px;margin:0px auto;width:250px;" role="presentation" width="250px" ><tr><td style="height:0;line-height:0;"> &nbsp;\r\n</td></tr></table><![endif]-->\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">\r\n                        <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:14px;font-style:GeistSans;line-height:1;text-align:center;color:#0F172A;">{body}</div>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!--[if mso | IE]></td></tr></table><![endif]-->\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <!--[if mso | IE]></td></tr></table><![endif]-->\r\n  </div>\r\n</body>\r\n\r\n</html>'
                }
            },
        },
    )
    print(f"Email notification sent to {email}")


@app.get("/")
async def root():
    return {"message": "Root path"}


@app.post("/process-video/")
async def handle_process_vide(request: Request, background_tasks: BackgroundTasks):
    try:
        data = await request.json()
        submission_id = data.get("submission_id")
        file_extension = data.get("file_extension")
        recipient_email = "imightbejan@gmail.com"
        if not submission_id or not file_extension:
            raise HTTPException(
                status_code=400, detail="Missing submission_id or file_extension"
            )
        print(f"SubmissionId: {submission_id}, File Extension: {file_extension}")
        await update_submission_status("PROCESSING", submission_id)
        await send_email_notification(
            recipient_email,
            "obscurus - New Submission Request",
            "Your video is being processed",
        )
        background_tasks.add_task(
            process_video_background, submission_id, file_extension
        )
        return {"message": "Video processing started"}
    except Exception as e:
        print(f"Error processing video: {e}")
        try:
            await update_submission_status("FAILED", submission_id)
            await send_email_notification(
                recipient_email, submission_id, "Error processing video"
            )
            return {"message": "Error processing video"}
        except Exception as error:
            print("Error updating status:", error)
            return {"message": "Error processing video"}


async def process_video_background(submission_id, file_extension):
    try:

        original_key = f"{submission_id}.{file_extension}"
        converted_key = original_key
        if file_extension.lower() != "mp4":
            converted_key = f"{submission_id}.mp4"
            local_webm_path = f"/tmp/{original_key}"
            s3.download_file(bucket_name, original_key, local_webm_path)
            local_mp4_path = f"/tmp/{converted_key}"
            convert_to_mp4(local_webm_path, local_mp4_path)
            s3.upload_file(local_mp4_path, bucket_name, converted_key)
            os.remove(local_webm_path)
            os.remove(local_mp4_path)
        job_id = start_face_detection(converted_key)
        job_response = check_job_status(job_id)
        timestamps, _ = get_timestamps_and_faces(job_id, rekognition)
        process_video(timestamps, job_response, submission_id)
        await update_submission_status("COMPLETED", submission_id)
    except Exception as e:
        raise e
