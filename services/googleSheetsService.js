const { google } = require('googleapis');

const GoogleSheetsService = {
  updateSheet: async (data) => {
    try {
      const sheets = google.sheets({ version: 'v4', auth: 'YOUR_GOOGLE_SHEETS_API_KEY' });

      // Example: Updating a sheet
      await sheets.spreadsheets.values.update({
        spreadsheetId: 'YOUR_SPREADSHEET_ID',
        range: 'Sheet1!A1',
        valueInputOption: 'RAW',
        resource: {
          values: [[data]],
        },
      });
      
      console.log('Updating Google Sheets:', data);
    } catch (error) {
      console.error('Error updating Google Sheets:', error);
      throw error;
    }
  },
};

module.exports = GoogleSheetsService;
