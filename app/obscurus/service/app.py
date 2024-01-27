import boto3
import os
import time
import cv2
import numpy as np
from moviepy.editor import *
from moviepy.editor import VideoFileClip, AudioFileClip, CompositeAudioClip
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
import uuid


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


def apply_faces_to_video(final_timestamps, local_path_to_video, local_output, video_metadata, color=(255,0,0), thickness=2):
    # Extract video info
    frame_rate = video_metadata["FrameRate"]
    frame_height = video_metadata["FrameHeight"]
    frame_width = video_metadata["FrameWidth"]
    width_delta = int(frame_width / 250)
    height_delta = int(frame_height / 100)
    # Set up support for OpenCV
    frame_counter = 0
    fourcc = cv2.VideoWriter_fourcc('M', 'J', 'P', 'G')
    # Create the file pointers
    v = cv2.VideoCapture(local_path_to_video)
    print("VideoCapture - local path to video")
    out = cv2.VideoWriter(
        filename=local_output,
        fourcc=fourcc,
        fps=int(frame_rate),
        frameSize=(frame_width, frame_height)
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
                        x = int(f['Left'] * frame_width) - width_delta
                        y = int(f['Top'] * frame_height) - height_delta
                        w = int(f['Width'] * frame_width) + 2 * width_delta
                        h = int(f['Height'] * frame_height) + 2 * height_delta

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
    #cv2.destroyAllWindows()
    print(f"Complete. {frame_counter} frames were written.")


def integrate_audio(original_video, output_video, audio_path='/tmp/audio.mp3'):
    # Extract audio
    my_clip = VideoFileClip(original_video)
    my_clip.audio.write_audiofile(audio_path)
    temp_location = '/tmp/output_video.mp4'
    # Join output video with extracted audio
    videoclip = VideoFileClip(output_video)
    # new_audioclip = CompositeAudioClip([audioclip])
    # videoclip.audio = new_audioclip
    videoclip.write_videofile(temp_location, codec='libx264', audio=audio_path, audio_codec='libmp3lame')

    os.rename(temp_location, output_video)
    # Delete audio
    os.remove(audio_path)

    print('Complete')

# Configure AWS clients
rekognition = boto3.client('rekognition')
s3 = boto3.client('s3')
print("init")
# Environment Variables
input_bucket = os.environ['INPUT_BUCKET']
input_name = os.environ['INPUT_NAME']
output_bucket = os.environ['OUTPUT_BUCKET']
output_name = os.environ['OUTPUT_NAME']
# payload = os.environ['SST_PAYLOAD']

def start_face_detection():
    print("Running face detection...")
    response = rekognition.start_face_detection(
        Video={'S3Object': {'Bucket': input_bucket, 'Name': input_name}}
    )
    return response['JobId']

def check_job_status(job_id):
    print("Checking job status...")
    while True:
        response = rekognition.get_face_detection(JobId=job_id)
        status = response['JobStatus']
        if status in ['SUCCEEDED', 'FAILED']:
            return response
        time.sleep(5)

def get_timestamps_and_faces(job_id, reko_client=None):
    print("Getting timestamps and faces...")
    final_timestamps = {}
    next_token = None
    first_round = True
    while next_token or first_round:
        print('.', end='')
        first_round = False
        # Query Rekognition for face detection results
        response = reko_client.get_face_detection(JobId=job_id, MaxResults=100, NextToken=next_token if next_token else "")
        # Iterate over each face detected and organize by timestamp
        for face in response['Faces']:
            f = face["Face"]["BoundingBox"]
            t = str(face["Timestamp"])
            if t not in final_timestamps:
                final_timestamps[t] = []
            final_timestamps[t].append(f)
        # Get next token for pagination
        next_token = response.get('NextToken', None)
    print('Complete')
    return final_timestamps, response


def process_video(timestamps, response):
    print("Processing video...")
    filename = input_name.split('/')[-1]
    local_filename = '/tmp/{}'.format(filename)
    local_filename_output = '/tmp/anonymized-{}'.format(filename)
    s3.download_file(input_bucket, input_name, local_filename)

    apply_faces_to_video(timestamps, local_filename, local_filename_output, response["VideoMetadata"])
    integrate_audio(local_filename, local_filename_output)

    s3.upload_file(local_filename_output, output_bucket, output_name)



app = FastAPI()

@app.post("/upload-video/")
async def upload_video(file: UploadFile = File(...), email: str = Form(...)):
    # Ensure the file is a video
    if not file.filename.endswith((".mp4", ".mov")):
        raise HTTPException(status_code=400, detail="Invalid file type")

    # Generate a unique key for the video
    video_key = f"{uuid.uuid4()}-{file.filename}"

    # Upload the file to S3
    s3_client = boto3.client('s3')
    try:
        s3_client.upload_fileobj(file.file, os.environ['INPUT_BUCKET'], video_key)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    # Start processing the video (asynchronously, e.g., using a background task or message queue)
    process_video(video_key)

    # Send an email notification (mocked)
    # send_email(email, "Your video is being processed", f"Video {video_key} is under processing.")

    return {"message": "Video uploaded and processing started", "video_key": video_key}

@app.get("/status/{video_key}")
def check_status(video_key: str):
    # Mocked status check
    # In a real application, you would query your database or storage to get the processing status
    status = "processing"  # Replace with real status check
    return {"video_key": video_key, "status": status}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)


