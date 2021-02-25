#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet');
const convertTo = require('./lib/convert')
const inquirer  = require('./lib/inquirer');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Clog', { horizontalLayout: 'full' })
  )
); 

const run = async () => {
  const answer = await inquirer.chooseConvertTo();
  if (answer.convert === 'json') {
    fs.writeFileSync( 'example-logfile/example-log.json', convertTo.convertJson() )
    console.log('Successfully converted log file to json. Please check the example-logfile directory')
    return
  } else {
    fs.writeFileSync( 'example-logfile/example-log.txt', convertTo.convertTxt() )
    console.log('Successfully converted log file to txt. Please check the example-logfile directory')
    return
  }
};

run();