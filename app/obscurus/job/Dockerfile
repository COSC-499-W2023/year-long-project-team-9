FROM public.ecr.aws/lambda/python:3.8

# WORKDIR /app

# COPY . /app

COPY requirements.txt .

# Install the function's dependencies
RUN pip3 install -r requirements.txt --target /var/task

# Install FFmpeg
RUN yum install -y tar xz && \
    curl -O https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz && \
    tar -xf ffmpeg-release-amd64-static.tar.xz && \
    cp ffmpeg-*-amd64-static/ffmpeg /usr/bin/ && \
    cp ffmpeg-*-amd64-static/ffprobe /usr/bin/ && \
    rm -rf ffmpeg-*-amd64-static ffmpeg-release-amd64-static.tar.xz

COPY app.py /var/task