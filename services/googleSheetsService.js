const { google } = require('googleapis');
require('dotenv').config(); // Load environment variables from .env

const GoogleSheetsService = {
  updateSheet: async (response) => {
    try {
      const auth = await authenticate();

      const sheets = google.sheets({ version: 'v4', auth });

      // Example: Updating a sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId: 'YOUR_SPREADSHEET_ID',
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
  // Implement the authentication logic using your service account credentials
  // Example:
  // const credentials = require('path/to/your/credentials.json');
  // const { client_secret, client_id, redirect_uris } = credentials.installed;
  // const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Load the credentials
  // oAuth2Client.setCredentials(yourStoredCredentials);

  // return oAuth2Client;
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
