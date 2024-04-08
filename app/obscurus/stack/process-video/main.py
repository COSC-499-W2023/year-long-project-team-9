###This code is based on the sample code provided by AWS. You can find it here:
###https://github.com/aws-samples/rekognition-video-people-blurring-cdk


import boto3
import os
import time
import cv2
from moviepy.editor import *
from moviepy.editor import VideoFileClip, AudioFileClip, CompositeAudioClip
from fastapi import (
    FastAPI,
    HTTPException,
    WebSocket,
    Request,
    BackgroundTasks,
)
import requests
import json
import subprocess
import websockets

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
    x_coordinates, y_coordinates = np.linspace(0, w, blocks + 1, dtype="int"), np.linspace(0, h, blocks + 1, dtype="int")

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
    blur_kernel_size=51,
):
    """
    Applies face blurring to video frames based on detected face coordinates.

    Parameters:
        final_timestamps (dict): Timestamps and face bounding boxes.
        local_path_to_video (str): Local path to the source video.
        local_output (str): Local path for the output video.
        video_metadata (dict): Metadata of the video, including frame rate and dimensions.
        blur_kernel_size (int): The size of the blur kernel.
    """
    frame_rate = video_metadata["FrameRate"]
    frame_height = video_metadata["FrameHeight"]
    frame_width = video_metadata["FrameWidth"]
    width_delta = int(frame_width / 250)
    height_delta = int(frame_height / 100)

    frame_counter = 0
    fourcc = cv2.VideoWriter_fourcc("M", "J", "P", "G")
    v = cv2.VideoCapture(local_path_to_video)
    out = cv2.VideoWriter(
        filename=local_output,
        fourcc=fourcc,
        fps=int(frame_rate),
        frameSize=(frame_width, frame_height),
    )

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
            out.write(frame)
            frame_counter += 1
        else:
            break

    out.release()
    v.release()
    print(f"Complete. {frame_counter} frames were written.")



def integrate_audio(
    submission_id, original_video, output_video, audio_path="/tmp/audio.mp3"
):

    print("original_video", original_video)
    my_clip = VideoFileClip(original_video)
    my_clip.audio.write_audiofile(audio_path)
    temp_location = "/tmp/{}-temp.mp4".format(submission_id)
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

    print("Completed integrating audio with video")


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
        response = reko_client.get_face_detection(
            JobId=job_id,
            MaxResults=100,
            NextToken=next_token if next_token else "",
        )
        for face in response["Faces"]:
            f = face["Face"]["BoundingBox"]
            t = str(face["Timestamp"])
            if t not in final_timestamps:
                final_timestamps[t] = []
            final_timestamps[t].append(f)
        next_token = response.get("NextToken", None)
    print("Complete")
    return final_timestamps, response

def convert_to_mp4(input_video, output_video):
    """
    Converts any video format to MP4 using FFmpeg, trimming the first few frames by starting at 0.04 seconds.
    This version uses subprocess for enhanced security and flexibility.

    Args:
        input_video (str): Path to the source video.
        output_video (str): Path where the output (MP4) video will be saved.
    """
    command = [
        "ffmpeg",
        "-i", input_video,
        "-ss", "00:00:00.1",
        "-c", "copy",
        "-strict", "-2",
        "-movflags", "faststart",
        output_video
    ]

    try:
        result = subprocess.run(command, capture_output=True, text=True, check=True)
        print(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Error converting video: {e}")
        print(e.stderr)

#Processes the video by applying the faces to the video and integrating the audio
def process_video(timestamps, response, submission_id, file_extension):
    print("Processing video...")
    input_name = f"{submission_id}.{file_extension}"
    output_name = f"{submission_id}-processed.mp4"
    local_filename = "/tmp/{}".format(input_name)
    temp_output_filename = "/tmp/{}-temp.mp4".format(submission_id)
    final_output_filename = "/tmp/{}".format(output_name)

    s3.download_file(bucket_name, input_name, local_filename)
    print("Job response", response)

    apply_faces_to_video(
        timestamps, local_filename, temp_output_filename, response["VideoMetadata"]
    )

    os.rename(temp_output_filename, final_output_filename)

    print("Integrating audio with video...")
    integrate_audio(
        submission_id=submission_id,
        original_video=local_filename,
        output_video=final_output_filename,
    )
    print("Uploading processed video to S3...")
    s3.upload_file(final_output_filename, bucket_name, output_name)

    os.remove(local_filename)
    os.remove(final_output_filename)
    print("Output file uploaded to S3")
    return "Completed processing!"


app = FastAPI()

#Sends a message to the websocket endpoint to update the status of a submission
async def update_submission_status(status: str, submission_id: str, requester_email: str, requestee_email: str):
    async with websockets.connect(ws_api_url) as websocket:
        message = json.dumps(
            {
                "action": "updateSubmissionStatus",
                "data": {"status": status, "submissionId": submission_id, "requesterEmail": requester_email, "requesteeEmail": requestee_email},
            }
        )
        await websocket.send(message)
        print(f"Status updated to {status} for submission {submission_id}")



#Creates a notification in the database and sends a message to the websocket endpoint to broadcast on the front end
async def create_notification(status: str, submission_id: str, requester_email, requestee_email):
    if status == "COMPLETED":
        async with websockets.connect(ws_api_url) as websocket:
            message = json.dumps(
                {
                    "action": "newNotification",
                    "data": {
                        "notification": {
                            "referenceId": submission_id,
                            "type": "SUBMIT",
                            "content": f"Your submission has finished processing!",
                            "email": requestee_email,
                        }
                    },
                }
            )
            await websocket.send(message)
            print(f"Status updated to {status} for submission {submission_id}")
            message2 = json.dumps(
                {
                    "action": "newNotification",
                    "data": {
                        "notification": {
                            "referenceId": submission_id,
                            "type": "SUBMIT",
                            "content": f"New submission received!",
                            "email": requester_email,
                        }
                    },
                }
            )
            await websocket.send(message2)



@app.get("/")
async def root():
    return {"message": "Root path"}


@app.post("/process-video/")
async def handle_process_vide(request: Request, background_tasks: BackgroundTasks):
    try:
        data = await request.json()
        submission_id = data.get("submission_id")
        file_extension = data.get("file_extension")
        requester_email = data.get("requester_email")
        requestee_email = data.get("requestee_email")
        blurred = data.get("blurred")
        print("blurred", blurred)
        if not submission_id or not file_extension:
            raise HTTPException(
                status_code=400, detail="Missing submission_id or file_extension"
            )
        print(
            f"SubmissionId: {submission_id}, File Extension: {file_extension}, Requester Email: {requester_email}, Requestee Email: {requestee_email}"
        )
        await update_submission_status("PROCESSING", submission_id, requester_email, requestee_email)
        # await send_email_notification(
        #     recipient_email,
        #     "obscurus",
        #     "Your video is being processed",
        # )
        await create_notification("PROCESSING", submission_id, requester_email, requestee_email)
        background_tasks.add_task(
            process_video_background, submission_id, file_extension, requester_email, requestee_email, blurred
        )
        return {"message": "Video processing started"}
    except Exception as e:
        print(f"Error processing video: {e}")
        try:
            await update_submission_status("FAILED", submission_id, requester_email, requestee_email)
            await create_notification("FAILED", submission_id, requester_email, requestee_email)
            return {"message": "Error processing video"}
        except Exception as error:
            print("Error updating status:", error)
            return {"message": "Error processing video"}


async def process_video_background(submission_id, file_extension, requester_email, requestee_email, blurred):
    try:
        #convert to mp4 if the video is not in mp4 format (webm does not work with rekognition)
        original_key = f"{submission_id}.{file_extension}"
        converted_key = original_key
        if file_extension.lower() != "mp4":
            converted_key = f"{submission_id}.mp4"
            local_webm_path = f"/tmp/{original_key}"
            print("local_webm_path", local_webm_path)
            s3.download_file(bucket_name, original_key, local_webm_path)
            local_mp4_path = f"/tmp/{converted_key}"
            print("local_mp4_path", local_mp4_path)
            print("Converting to MP4...")
            convert_to_mp4(local_webm_path, local_mp4_path)
            s3.upload_file(local_mp4_path, bucket_name, converted_key)
            print("MP4 file uploaded to S3")
            # os.remove(local_webm_path)
            # os.remove(local_mp4_path)
        if (blurred):
            job_id = start_face_detection(converted_key)
            job_response = check_job_status(job_id)
            timestamps, _ = get_timestamps_and_faces(job_id, rekognition)
            process_video(timestamps, job_response, submission_id, "mp4")

        else:
            #if the video is not blurred, we just copy the video to the processed folder
            s3.copy_object(
                Bucket=bucket_name,
                CopySource={"Bucket": bucket_name, "Key": converted_key},
                Key=f"{submission_id}-processed.mp4",
            )
        await update_submission_status("COMPLETED", submission_id, requester_email, requestee_email)
        await create_notification("COMPLETED", submission_id, requester_email, requestee_email)

    except Exception as e:
        print(f"Error processing video: {e}")
        await update_submission_status("FAILED", submission_id, requester_email, requestee_email)
        await create_notification("FAILED", submission_id, requester_email, requestee_email)
