// scripts/errorHandler.js
const pRetry = require('p-retry');
const { integrateWithGoogleSheets } = require('./googleSheetsIntegration');

const retryOptions = {
  retries: 3,
  onFailedAttempt: (error) => {
    console.error(`Integration failed: ${error.message}`);
  },
};

module.exports = {
  retryGoogleSheetsIntegration: async (data) => {
    return pRetry(() => integrateWithGoogleSheets(data), retryOptions);
  },
};
