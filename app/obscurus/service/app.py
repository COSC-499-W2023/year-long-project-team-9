
import json
from flask import request, Response, Flask
bucket_name = os.environ.get('BUCKET_NAME')

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello world"

@app.route("/detect", methods=["POST"])
def detect():
    data = request.get_json()
    bucket_name = data.get("bucketName")
    response_data = {
        "bucket": bucket_name
    }
    print("BUCKET_NAME")
    return Response(
        json.dumps(response_data),  
        mimetype='application/json'
    )


if __name__ == '__main__':
    app.run(port=8080)