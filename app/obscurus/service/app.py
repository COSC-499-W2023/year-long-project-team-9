import json
import logging
import os
from flask import Flask, request, jsonify
import boto3
import botocore
import cv2

from video_processor import apply_faces_to_video, integrate_audio

logger = logging.getLogger()
logger.setLevel(logging.INFO)

reko = boto3.client('rekognition')
s3 = boto3.client('s3')

output_bucket = os.environ['OUTPUT_BUCKET']
input_bucket = os.environ['INPUT_BUCKET']
input_name = os.environ['INPUT_NAME']
output_name = os.environ['OUTPUT_NAME']

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process():
    data = request.json
    try:
        event = json.loads(data)
        # Now you can safely access event['response']
        response = event['response']
        # get metadata of file uploaded to Amazon S3
        filename = input_name.split('/')[-1]
        local_filename = '/tmp/{}'.format(filename)
        local_filename_output = '/tmp/anonymized-{}'.format(filename)
    except KeyError:
        error_message = 'Lambda invoked without S3 event data. Event needs to reference a S3 bucket and object key.'
        logger.log(logging.ERROR, error_message)
        # add_failed(bucket, error_message, failed_records, key)

    try:
        s3.download_file(input_bucket, input_name, local_filename)
    except botocore.exceptions.ClientError:
        error_message = 'Lambda role does not have permission to call GetObject for the input S3 bucket, or object does not exist.'
        logger.log(logging.ERROR, error_message)
        # add_failed(bucket, error_message, failed_records, key)
        # continue

        # get timestamps
    try:
        timestamps = event['timestamps']
        apply_faces_to_video(timestamps, local_filename, local_filename_output, response["VideoMetadata"])
    except Exception as e:
        print(e)
        # continue

    try:
        integrate_audio(local_filename, local_filename_output)
    except Exception as e:
        print(e)

    # uploaded modified video to Amazon S3 bucket
    try:
        s3.upload_file(local_filename_output, output_bucket, output_name)
    except boto3.exceptions.S3UploadFailedError:
        error_message = 'Lambda role does not have permission to call PutObject for the output S3 bucket.'
        # add_failed(bucket, error_message, failed_records, key)
        # continue
    print("Faces in video blurred successfully")
    return jsonify({"status": "success", "processed_bucket_name": output_name}), 200



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)




