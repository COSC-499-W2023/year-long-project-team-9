import boto3
import os
import time
from video_processor import anonymize_face_pixelate, apply_faces_to_video, integrate_audio

# Configure AWS clients
rekognition = boto3.client('rekognition')
s3 = boto3.client('s3')
print("init")
# Environment Variables
input_bucket = os.environ['INPUT_BUCKET']
input_name = os.environ['OBJECT_KEY']
output_bucket = os.environ['OUTPUT_BUCKET']
output_name = os.environ['OUTPUT_NAME']

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
    local_filename = '/tmp/{}'.format(input_name.split('/')[-1])
    local_filename_output = '/tmp/anonymized-{}'.format(local_filename)
    s3.download_file(input_bucket, input_name, local_filename)

    apply_faces_to_video(timestamps, local_filename, local_filename_output, response["VideoMetadata"])
    integrate_audio(local_filename, local_filename_output)

    s3.upload_file(local_filename_output, output_bucket, output_name)

def main():
    job_id = start_face_detection()
    job_response, _ = check_job_status(job_id)
    timestamps = get_timestamps_and_faces(job_response)
    process_video(timestamps, job_response)

    print('Video processing completed')

if __name__ == "__main__":
    main()
