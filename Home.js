const { SmsClient } = require('@azure/communication-sms');

// This code retrieves your connection string from an environment variable.
const connectionString = process.env['COMMUNICATION_SERVICES_CONNECTION_STRING'];

const smsClient = new SmsClient(connectionString);

async function main() {
    await smsClient.send({
      from: "<from_phone_number>",
      to: ["<to_phone_number>"],
      message: `Hello World 👋🏻 via SMS`
    });
  }
  
  main();
