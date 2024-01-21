import boto3

reko = boto3.client('rekognition')
s3 = boto3.client('s3')

def lambda_handler(event, context):
    job_id = event['job_id']
    reko_client = boto3.client('rekognition')
    response = reko_client.get_face_detection(JobId=job_id, MaxResults=100)

    return{
                "job_id": job_id,
                "job_status": response['JobStatus'],
            }
