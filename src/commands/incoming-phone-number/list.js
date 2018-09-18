const { flags } = require('@oclif/command');
const TwilioClientCommand = require('../../base-commands/twilio-client-command');

class NumberList extends TwilioClientCommand {
  async run() {
    await super.run();
    const { flags } = this.parse(NumberList);

    const fullData = await this.twilioClient.incomingPhoneNumbers.list();
    this.output(fullData, flags.properties);
  }
}

NumberList.description = 'Show what Twilio phone numbers you have configured';

NumberList.flags = Object.assign(
  {
    properties: flags.string({
      default: 'sid, phoneNumber, friendlyName',
      description:
        'The incomingPhoneNumber object properties you would like to display (JSON output always shows all properties)'
    })
  },
  TwilioClientCommand.flags
);

module.exports = NumberList;
