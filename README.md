
# obscurus

[![Seed Status](https://api.seed.run/imightbejan/year-long-project-team-9/stages/prod/build_badge)](https://console.seed.run/imightbejan/year-long-project-team-9)

Obscurus is a serverless web app that facilitates private online communication by allowing users to request and submit videos with face-blurring applied.

## Features

- Video submission with optional face-blurring.
- Serverless architecture ensuring scalability and cost-efficiency.
- Secure and private online communication.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- AWS account with appropriate permissions.
- AWS CLI installed and configured.
- Node.js v18.x installed.
- NPM installed (comes with Node.js).

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

3. **Navigate to the App Directory:**
   ```bash
   cd app/obscurus
   ```

4. **Install Dependencies:**
   Run the following command to install the necessary dependencies:
   ```bash
   npm install
   ```

5. **Start the Development Server:**
   First, start the Serverless Stack Toolkit (SST) development environment:
   ```bash
   npx sst dev
   ```
   Open another terminal window and run the development server:
   ```bash
   npm run dev
   ```

## Usage

After starting the development servers as described in the installation section, you can access the web app locally to develop and test your changes.
