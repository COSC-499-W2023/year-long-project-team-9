FROM public.ecr.aws/lambda/python:3.8
# Install the function's dependencies
# Copy file requirements.txt from your project folder and install
# the requirements in the app directory.

COPY requirements.txt  .
RUN  pip install -r requirements.txt
RUN yum install -y tar xz && \
    curl -O https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz && \
    tar -xf ffmpeg-release-amd64-static.tar.xz && \
    cp ffmpeg-*-amd64-static/ffmpeg /usr/bin/ && \
    cp ffmpeg-*-amd64-static/ffprobe /usr/bin/ && \
    rm -rf ffmpeg-*-amd64-static ffmpeg-release-amd64-static.tar.xz
RUN ffmpeg -h
# Copy helper functions
COPY video_processor.py video_processor.py

# Copy handler function (from the local app directory)
COPY  app.py  .

# Overwrite the command by providing a different command directly in the template.
CMD ["app.lambda_function"]
