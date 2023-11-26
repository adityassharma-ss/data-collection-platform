const twilio = require('twilio');
require('dotenv').config();

const SmsService = {
  sendSms: async (phoneNumber, message) => {
    try {
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

      const client = twilio(accountSid, authToken);

      await client.messages.create({
        body: message,
        from: twilioPhoneNumber,
        to: phoneNumber,
      });

      console.log(`SMS sent to ${phoneNumber}: ${message}`);
    } catch (error) {
      console.error('Error sending SMS:', error);
      throw error;
    }
  },
};

module.exports = SmsService;
