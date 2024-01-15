import boto3

reko = boto3.client('rekognition')
s3 = boto3.client('s3')

def lambda_handler(event, context):
    job_id = "81fcfcab828ea500878e3ab0da2d74b2b54236f4d0c0e55527d7b51c83564b1b"
    reko_client = boto3.client('rekognition')
    response = reko_client.get_face_detection(JobId=job_id, MaxResults=100)

    return {
        "statusCode": 200,
        "body":
            {
                "job_id": job_id,
                "job_status": response['JobStatus'],
            }
    }
