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


app = FastAPI()


async def update_submission_status(status: str, submission_id: str):
    async with websockets.connect(ws_api_url) as websocket:
        message = json.dumps(
            {
                "action": "updateSubmissionStatus",
                "data": {"status": status, "submissionId": submission_id},
            }
        )
        await websocket.send(message)
        print(f"Status updated to {status} for submission {submission_id}")


async def send_email_notification(email: str, subject: str, text: str):
    print("Sending email notification...")
    print(f"Email: {email}, Subject: {subject}, Text: {text}")
    try:
        res = requests.post(
            f"{api_url}/sendEmail",
            json={
                "email": email,
                "subject": subject,
                "text": text,
            },
        )
        if res.status_code != 200:
            raise Exception("Error sending email")
        print("Email sent")

    except Exception as error:
        print("Error sending email:", error)


@app.get("/")
async def root():
    return {"message": "Root path"}


@app.post("/process-video/")
async def handle_process_vide(request: Request, background_tasks: BackgroundTasks):
    try:
        data = await request.json()
        submission_id = data.get("submission_id")
        file_extension = data.get("file_extension")
        recipient_email = data.get("email")
        if not submission_id or not file_extension:
            raise HTTPException(
                status_code=400, detail="Missing submission_id or file_extension"
            )
        print(
            f"SubmissionId: {submission_id}, File Extension: {file_extension}, Email: {recipient_email}"
        )
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
