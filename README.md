# Data Collection Platform

The Data Collection Platform is a robust system designed for collecting and managing responses across multiple organizations and use cases. This README provides an overview of the project, its components, and instructions on how to set up and run the application.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Google Sheets Integration](#google-sheets-integration)
- [Testing](#testing)
- [Monitoring and Logging](#monitoring-and-logging)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Form Creation:** Create forms with questions and metadata.
- **Response Management:** Capture and manage responses to forms.
- **Integration:** Seamless integration with Google Sheets and other potential plugins.
- **Validation:** Validate responses based on business rules.
- **SMS Integration:** Send SMS receipts to participants.

## Requirements

- Node.js (v14 or higher)
- MongoDB
- Google Sheets API Key and Service Account Credentials
- Artillery for Load Testing (optional)

## Installation

1. Clone the repository:
   ```bash
```

2. Navigate to the project directory:
    ```bash
    cd data-collection-platform
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

Configuration

1. Create a .env file in the project root and configure the following variables:

```MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
GOOGLE_SHEETS_API_KEY=your-google-sheets-api-key
GOOGLE_SHEETS_SPREADSHEET_ID=your-google-sheets-spreadsheet-id```

2. Create a service account in the Google Cloud Console and download the credentials file. Rename the file to `google-sheets-service-account.json` and place it in the project root.

## Usage

1. Start the application:
    ```bash
    npm start
    ```

2. Navigate to http://localhost:3000 in your browser.

3. Ensure MongoDB is running and accessible.

