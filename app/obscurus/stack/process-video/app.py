import json
import requests
import json
import boto3
import os
import time
import cv2
import numpy as np
from moviepy.editor import *
from moviepy.editor import VideoFileClip, AudioFileClip, CompositeAudioClip
import subprocess


# Configure AWS clients
rekognition = boto3.client("rekognition")
s3 = boto3.client("s3")
print("init")
# Environment Variables
bucket_name = os.environ["BUCKET_NAME"]
payload = json.loads(os.getenv("SST_PAYLOAD"))
submission_id = payload["submissionId"]
file_ext = "mp4"  # Set the expected file extension for all output files.
print("submission_id: ", submission_id)
input_name = f"{submission_id}.{payload['fileExt']}"  # Keep original file extension here for input purposes.
output_name = f"{submission_id.split('.')[0]}-processed.{file_ext}"  # Output is always .mp4
api_url = os.environ["API_URL"]
print("API_URL", api_url)


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
    temp_location = "{}-processed.{}".format(original_video, file_ext)

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


# payload = os.environ['SST_PAYLOAD']


def start_face_detection():
    print("Running face detection...")
    print("Bucket: " + bucket_name + ", Input Name: " + input_name)
    response = rekognition.start_face_detection(
        Video={"S3Object": {"Bucket": bucket_name, "Name": input_name}},
    )
    return response["JobId"]


def check_job_status(job_id):
    print("Checking job status...")
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
            JobId=job_id, MaxResults=100, NextToken=next_token if next_token else ""
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


def update_status(status, submission_id):
    print("In update status")
    print("status", status)
    print("submission_id", submission_id)
    try:
        response = requests.post(
            f"{api_url}/updateStatus",
            json={
                "submissionId": submission_id,
                "status": status,
            },
        )
        print("Response", response)
        print("Status updated")

    except Exception as error:
        print("Error updating status:", error)


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


def process_video(timestamps, response):
    print("Processing video...")
    local_filename = "/tmp/{}".format(input_name)
    temp_output_filename = "/tmp/{}-temp.mp4".format(submission_id)
    final_output_filename = "/tmp/{}-processed.mp4".format(submission_id)

    s3.download_file(bucket_name, input_name, local_filename)
    print("Job response", response)

    apply_faces_to_video(
        timestamps, local_filename, temp_output_filename, response["VideoMetadata"]
    )

    if file_ext.lower() != "mp4":
        print("Converting video to MP4 format...")
        convert_to_mp4(temp_output_filename, final_output_filename)
    else:
        os.rename(temp_output_filename, final_output_filename)

    print("Integrating audio with video...")
    integrate_audio(local_filename, final_output_filename)

    print("Uploading processed video to S3...")
    s3.upload_file(final_output_filename, bucket_name, output_name)
    print("Output file uploaded to S3")


def main():
    print("Running...")
    update_status("PROCESSING", submission_id)
    try:
        job_id = start_face_detection()
        job_response = check_job_status(job_id)
        timestamps, _ = get_timestamps_and_faces(job_id, rekognition)
        process_video(timestamps, job_response)
        print("API_URL", api_url)
        update_status("COMPLETED", submission_id)

        print("Video processing completed")
    except Exception as e:
        print("Error", e)
        update_status("FAILED", submission_id)
        print("Failed to process video")


if __name__ == "__main__":
    main()
