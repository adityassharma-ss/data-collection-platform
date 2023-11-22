// scripts/smsIntegration.js
const config = require('config');
const twilio = require('twilio');

const accountSid = config.get('twilio.accountSid');
const authToken = config.get('twilio.authToken');
const client = new twilio(accountSid, authToken);

module.exports = {
  sendSMS: async (to, body) => {
    try {
      await client.messages.create({
        to,
        from: config.get('twilio.phoneNumber'),
        body,
      });
    } catch (error) {
      // Handle error
    }
  },
};
