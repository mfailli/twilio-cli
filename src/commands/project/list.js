const chalk = require('chalk');
const { BaseCommand } = require('@twilio/cli-core').baseCommands;

class ProjectList extends BaseCommand {
  async run() {
    await super.run();
    if (this.userConfig.projects.length > 0) {
      this.output(this.userConfig.projects);
    } else {
      this.logger.warn('No projects have been configured. Run ' + chalk.whiteBright('twilio login') + ' to add one!');
    }
  }
}

ProjectList.description = 'show what Twilio projects you have configured';
ProjectList.flags = BaseCommand.flags;

module.exports = ProjectList;
