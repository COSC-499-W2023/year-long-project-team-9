FROM public.ecr.aws/lambda/python:3.8

<<<<<<<< HEAD:app/obscurus/job/Dockerfile
# WORKDIR /app

# COPY . /app

COPY requirements.txt .
========
WORKDIR /main

COPY . /main
>>>>>>>> link-service:app/obscurus/service/Dockerfile

# Install the function's dependencies
RUN pip3 install -r requirements.txt --target /var/task

# Install FFmpeg
RUN yum install -y tar xz && \
    curl -O https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz && \
    tar -xf ffmpeg-release-amd64-static.tar.xz && \
    cp ffmpeg-*-amd64-static/ffmpeg /usr/bin/ && \
    cp ffmpeg-*-amd64-static/ffprobe /usr/bin/ && \
    rm -rf ffmpeg-*-amd64-static ffmpeg-release-amd64-static.tar.xz

<<<<<<<< HEAD:app/obscurus/job/Dockerfile
COPY app.py /var/task
========

EXPOSE 8080

ENV NAME World

ENTRYPOINT ["uvicorn", "main:app", "--workers", "9", "--host", "0.0.0.0", "--port", "8080"]
>>>>>>>> link-service:app/obscurus/service/Dockerfile
