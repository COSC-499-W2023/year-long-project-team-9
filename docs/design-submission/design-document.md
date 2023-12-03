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
    - ER Diagram:
    ![ER diagram](./img/er-diagram.png)
    - Quick summary: a user can make many video requests and has preferences. Moreover, the user can be in many chat rooms, each with at leadt two users and a maximum of 10 users. 
    - The center of the ER diagram is the User entity. Placing the user at the center of the ER diagram meant putting them at the center of the user experience and development. That is, placing the user at the center of the ER diagram meant we would develop a web app that places the user at the center. 
        - Of course, another possible way to model the web app is to place the Request entity at the center. Such a diagram would have the consequence that, for example, there would be only one chat room per request. However, the ladder approach would not have worked since we wish to develop a project that could easily be extended beyond the MVP. By having the requests at the center, the user will only be able to interact with other features mediated through request, leading to a one-dimensional web app. Early in the process, around the time of conceptualizing the MVP, there was some thought given to this ladder approach. However, such a model was abandoned for the reason mentioned above. 
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

#### Serverless Backend
Our backend architecture is serverless, utilizing AWS Lambda for compute operations, which allows for automatic scaling and management of the infrastructure. This aligns with our need for a cost-effective, low-maintenance solution capable of handling variable workloads.

#### Real-time Messaging
For real-time user messaging, we plan to implement a WebSocket connection using the SST construct for Amazon API Gateway. This service manages the persistent connections needed for real-time bi-directional communication, which is essential for the chat feature of our app.

#### Video Processing
Video processing is managed by AWS Step Functions, orchestrating a workflow that involves AWS Lambda for initial processing and Amazon Elastic Container Service (ECS) with AWS Fargate for heavier tasks such as face detection with Amazon Rekognition and blurring with OpenCV.

#### Storage and Database
Amazon S3 is utilized for storing static assets and user-uploaded videos, providing a durable and secure solution. Amazon DynamoDB serves as our database, storing user and connection information, which is critical for associating messages and videos with specific users.

#### Authentication and Authorization
We use Amazon Cognito for user authentication and authorization, which provides a secure and scalable solution for user management. This allows us to easily manage user accounts and permissions, and provides a secure way to authenticate users.


#### Continuous Integration and Deployment
We adopted GitHub Actions for our CI/CD pipeline, automating our testing and deployment process. Our codebase undergoes automated tests, and upon successful completion, SST deploys the latest build to AWS, ensuring that our production environment is always up to date with the latest changes.


#### Testing

We use Jest for front-end unit testing, Vitest for testing AWS infrastructure, and Playwright for end-to-end testing. Our unit tests are run automatically as part of our CI/CD pipeline, and our end-to-end tests are run manually before each deployment. We also use ESLint to ensure that our code adheres to coding standards.

#### Frontend Hosting and Delivery
Our frontend is built using Next.js and hosted on Amazon CloudFront, which provides a fast content delivery network (CDN) service. This ensures low-latency access to our app globally, improving the user experience by reducing load times.

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



## Database Design


## UI Design


## Features


## Testing

