const SmsService = {
    sendSms: (phoneNumber, message) => {
        console.log(`Sending SMS to ${phoneNumber}: ${message}`);

      // const smsGateway = require('your-sms-gateway-package');
      // smsGateway.send({
      //   to: phoneNumber,
      //   body: message,
      // });

    },
};

module.exports = SmsService;
