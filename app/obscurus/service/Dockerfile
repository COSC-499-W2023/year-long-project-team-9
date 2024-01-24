FROM public.ecr.aws/lambda/python:3.8

# Install the function's dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Install FFmpeg
RUN yum install -y tar xz && \
    curl -O https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz && \
    tar -xf ffmpeg-release-amd64-static.tar.xz && \
    cp ffmpeg-*-amd64-static/ffmpeg /usr/bin/ && \
    cp ffmpeg-*-amd64-static/ffprobe /usr/bin/ && \
    rm -rf ffmpeg-*-amd64-static ffmpeg-release-amd64-static.tar.xz

# Copy application code
COPY video_processor.py .
COPY app.py .

# Set the CMD to your handler
CMD ["app.main"]
