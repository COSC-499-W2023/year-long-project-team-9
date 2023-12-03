# COSC499 Team 9 Design Document

## Table of Contents

1. [Overview](#introduction)
    - Recap of Prototype
2. [System Architecture](#system-architecture)
    - System Architecture Diagram
    - System Architecture Description  
        - Why you chose this architecture and
        - Why the components are where you put them.
3. [Database Design](#database-design)
    - ER Diagram
    - Explain why the data is modeled this way and whether there is another way to model it but why this is better. Was there a time when you thought of having something different but chose this instead? If so, explain what that was and why that decision was canned.
4. [User Interface Design](#ui-design)
    - Navigation Diagram
    - Diagram of forgone alternative
    - Explanation of why you chose this design over the alternative
5. [Features](#features):
    - Feature 1
    - Feature 2
    - Feature 3
    - Feature 4
    - Feature 5
    - Feature 6
    - Feature 7
    - Feature 8

6. Testing (?)

## Overview


## System Architecture

### System Architecture Diagram

![System Architecture Diagram](img/system-architecture.png)

### System Architecture Description

------

The system architecture we selected for this project is serverless. This means the system is run by using various AWS managed services and does not require the maintenance of servers. 

The key frameworks we are using for our app are **Next.js** and **Tailwind CSS** for the front-end, and **SST** for the back-end:

#### Next.js

------------------

[Next.js](https://nextjs.org/) is a React framework with server-side functionality. We chose Next.js for the following reasons:
- Next.js is a great framework for building React apps because it allows us to build a React app with server-side functionality and API routing.
- Next.js enables us to hybrid sites, allowing us to have both static and server-side rendered pages.
- Thanks to SST's OpenNext Next.js adatper, we are able to get the full functionality of Next.js while still being able to deploy our app on AWS instead of Vercel.
- The API routing functionality of Next.js allows us to easily create API endpoints for our app and allow our front-end to communicate with our back-end services.

#### TailwindCSS

------------------

[TailwindCSS](https://tailwindcss.com/) is a utility-first CSS framework that allows us to build custom designs without having to write custom CSS. We chose TailwindCSS for the following reasons:
- TailwindCSS allows us to write CSS directly in our React JSX, which is preferable for maintainability and readability.
- Tailwind has many useful utility classes that enable rapid development, with the ability to easily customize the design.
- We used [shadcn's UI library](https://ui.shadcn.com/) for TailwindCSS, granting us access to beautiful components that we can use to build our app.

#### SST

------------------

[SST](https://sst.dev/) is an open-source framework for AWS that allows us to easily integrate our Next.js app with the various AWS services. We chose SST for the following reasons:
- SST is a wrapper for the AWS CDK, which allows us to create AWS infrastructure with code, and it provides various abstractions that make it easier to use than the CDK.
- SST is open-source and has a great community, which means we can easily find help if we run into issues. 
- They place a strong emphasis on developer experience, which means we can easily get started with SST and learn how to use it.
- SST allows us to easily deploy our app to AWS, and provides a local development environment for us to test our Lambda functions locally.
- SST, through OpenNext, allows us to deploy our Next.js app directly to AWS with full functionality, instead of having to deploy to Vercel, which is the default deployment method for Next.js apps.


#### AWS Services

------------------


SST provides a wrapper for the AWS CDK, which allows us to create AWS infrastructure with code, so we can easily create the AWS services we need for our app without losing the ability to customize the underlying CDK.

The AWS services we are using for our app are as follows:
- **Lambda**: We are using Lambda to run our back-end code. We are using Lambda functions to handle API requests, and to handle the logic for our app. [SST provides a wrapper construct for Lambda functions](https://docs.sst.dev/constructs/Function).
- **DynamoDB**: We are using DynamoDB as our database. We are using DynamoDB to store our user data, as well as our data for our app. [SST provides a wrapper construct for DynamoDB](https://docs.sst.dev/constructs/Table).
- **Cognito**: We are using Cognito to handle user authentication. We are using Cognito to handle user sign-up, sign-in, and sign-out. However, we intend to switch to SST's own Auth service, which is free, open-source and stateless.
- **S3**: We are using S3 to store our app's static assets. We are using S3 to store our app's images, as well as our app's CSS and JS files. SST provides the Bucket construct for S3 which makes it easier to use while still allowing for the customization of the underlying CDK.
- **API Gateway**: We are using API Gateway to handle API requests. We are using API Gateway to route API requests to our Lambda functions. SST provides a wrapper for API Gateway that makes it easier to use.
- **CloudFront**: We are using CloudFront to serve our app's static assets. We are using CloudFront to serve our app's images, as well as our app's CSS and JS files. This is managed by SST.
- **Route 53**: We are using Route 53 to handle our app's domain name. We are using Route 53 to route our app's domain name to our app's CloudFront distribution.
- **CloudWatch**: We are using CloudWatch to handle our app's logging. We are using CloudWatch to log our app's API requests, as well as our app's Lambda function invocations. This is managed by SST.
- **IAM**: We are using IAM to handle our app's permissions. We are using IAM to grant our app's Lambda functions permission to access our app's DynamoDB tables. This is managed by SST.


## Database Design


## UI Design


## Features


## Testing

