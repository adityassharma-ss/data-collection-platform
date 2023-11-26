const GoogleSheetsService = require('../services/googleSheetsService');

exports.googleSheetsIntegration = async (req, res) => {
  try {
    // Assuming you have a function in the GoogleSheetsService to update the sheet
    await GoogleSheetsService.updateSheet(req.body);
    res.status(200).send('Integration successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
