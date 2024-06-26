# obscurus

[![Seed Status](https://api.seed.run/imightbejan/year-long-project-team-9/stages/prod/build_badge)](https://console.seed.run/imightbejan/year-long-project-team-9)

[obscurus.me](https://obscurus.me) is a serverless web app that facilitates private online communication by allowing users to request and submit videos with face-blurring applied.

## Features

- Video submission with optional face-blurring.
- Serverless architecture ensuring scalability and cost-efficiency.
- Secure and private online communication.

## Demo

- Check out the demo video [here](https://www.youtube.com/watch?v=4Sjj6J6F270)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- AWS account with appropriate permissions.
- AWS CLI installed and configured.
   - Find the instructions [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html)
- Node.js v18.17 installed.
- NPM installed.

## Installation

Follow these steps to get your development environment set up:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/COSC-499-W2023/year-long-project-team-9.git
   ```

2. **AWS SSO Login:**
   To configure your AWS credentials, use AWS Single Sign-On (SSO).
   ```bash
   aws sso login
   ```
   Follow the instructions to sign in with your AWS credentials in your browser.


3. **Install Dependencies:**
   Run the following command to install the necessary dependencies:
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   First, start the SST development environment:
   ```bash
   npx sst dev
   ```
   Open another terminal window and run the Next.js development server:
   ```bash
   npm run dev
   ```

5. **Deploying to AWS CloudFront:** To deploy the app,
   ```bash
   npx sst deploy
   ```

## SST

- Read more about [SST](https://sst.dev) on their official website for more information about things like the Live Lambda environment.

## Seed

- While obscurus can be deployed and developed on entirely from the CLI, we have been using [Seed](https://https://seed.run/) for our CI/CD (in combination with GitHub actions).

## Notes

- The SST console is very useful for running migrations and testing Lambda functions. You can use it when running `npx sst dev` by going to [https://old.console.sst.dev/obscurus/](https://old.console.sst.dev/obscurus/)
- Because obscurus is entirely serverless, there are times when the requests to the app will experience extra latency because AWS Lambda functions can experience "cold starts".
    - Read more [here](https://docs.aws.amazon.com/lambda/latest/operatorguide/execution-environments.html)
- Because the microservice is only created when the stack is deployed, video processing does not work when using `npx sst dev`. You must deploy using `npx sst deploy`.

## Known issues

- When a user records a video in the browser, the file (.webm) must be converted to mp4 before having the face blurring applied. However, sometimes the conversion results in a loss of quality and the first frame or so is not blurred.
- The emails sent from the microservice when the video has completed processing do not have the templating applied. This only affects these emails and other emails sent by the app use the proper obscurus template.


## WorkMail
To access WorkMail:
- Please contact jansdhillon@gmail.com if you need access to the help@obscurus.me or no-reply@obscurus.me addresses.
- *Note:* The logo is stored in an S3 bucket `obscurus-branding-images`
