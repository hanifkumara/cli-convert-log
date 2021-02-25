const inquirer = require('inquirer');

module.exports = {
  chooseConvertTo: () => {
    const questions = [
      {
        type: 'rawlist',
        name: 'convert',
        message: 'Select a type to convert the log file:',
        choices: ['json', 'plaintext']
      }
    ];
    return inquirer.prompt(questions);
  },
  tryArgsv: () => {
    const argv = require('minimist')(process.argv.slice(3));
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the location of the log file directory:',
        default: argv._[0],
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the location of the log file directory.';
          }
        }
      }
    ]
    return inquirer.prompt(questions);
  }
};