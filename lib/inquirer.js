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
    const argv = require('minimist')(process.argv.slice(5));
    const questions = [
      {
        type: 'input',
        name: 'location',
        message: 'Enter the location of the log file directory:',
        default: argv._[0],
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the location of the log file directory.';
          }
        }
      },
      {
        type: 'input',
        name: 'flag',
        message: 'Enter the flag:',
        default: argv._[1],
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return true;
          }
        }
      },
      {
        type: 'input',
        name: 'type',
        message: 'Enter type convert:',
        default: argv._[2]
      },
      {
        type: 'input',
        name: 'flagSecond',
        message: 'Enter flag second:',
        default: argv._[3]
      },
      {
        type: 'input',
        name: 'locationFile',
        message: 'Enter location file:',
        default: argv._[4]
      }
    ]
    return inquirer.prompt(questions);
  }
};