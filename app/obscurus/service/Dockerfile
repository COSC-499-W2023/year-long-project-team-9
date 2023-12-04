FROM public.ecr.aws/docker/library/python:3.9-slim

COPY . /app
WORKDIR /app/

RUN pip install -r requirements.txt

EXPOSE 3000

ENTRYPOINT ["python", "app.py"]