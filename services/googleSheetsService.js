const { google } = require('googleapis');
const fs = require('fs/promises');
require('dotenv').config(); // Load environment variables from .env

const GoogleSheetsService = {
  updateSheet: async (response) => {
    try {
      const auth = await authenticate();

      const sheets = google.sheets({ version: 'v4', auth });

      // Example: Updating a sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        range: 'Sheet1', // Update the range according to your sheet
        valueInputOption: 'RAW',
        resource: {
          values: [mapResponseToRow(response)],
        },
      });

      console.log('Google Sheet updated successfully.');
    } catch (error) {
      console.error('Error updating Google Sheets:', error);
      throw error;
    }
  },
};

// Function to authenticate with service account credentials
async function authenticate() {
  try {
    const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS);
    const { client_email, private_key } = credentials;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email,
        private_key,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    return auth.getClient();
  } catch (error) {
    console.error('Error authenticating with Google Sheets:', error);
    throw error;
  }
}

// Function to map response data to a row in the sheet
function mapResponseToRow(response) {
  // Assuming the response object has a structure that maps to your sheet columns
  return [
    response.answers[0].value,
    response.answers[1].value,
    // ... map other questions to columns
  ];
}

module.exports = GoogleSheetsService;
