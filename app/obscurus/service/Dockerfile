# Start from AWS Python 3.8 base image
FROM public.ecr.aws/lambda/python:3.8

# Install the dependencies
COPY requirements.txt .
RUN pip3 install -r requirements.txt --target "${LAMBDA_TASK_ROOT}"

# Copy our function code
COPY handler.py ${LAMBDA_TASK_ROOT}

# Set the handler function
CMD [ "handler.main" ]