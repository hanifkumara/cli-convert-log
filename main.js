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
  const answer = await inquirer.tryArgsv();
  let file = answer.location;
  fileTxt = file.substr(0, file.lastIndexOf(".")) + ".txt";
  fileJson = file.substr(0, file.lastIndexOf(".")) + ".json";

  if (!answer.flag) {
    fs.writeFileSync( fileTxt, convertTo.convertTxt(answer.location) )
    console.log('Successfully converted log file to Plaintext')
    return
  }
  if (answer.flag === '-t') {
    if (answer.type === 'json') {
      if (answer.flagSecond === '-o') {
        fs.writeFileSync( answer.locationFile, convertTo.convertJson(answer.location) )
        console.log('Successfully converted log file to json')
        return
      } else {
        fs.writeFileSync( fileJson, convertTo.convertJson(answer.location) )
        console.log('Successfully converted log file to json')
        return
      }
    } else if (answer.type === 'text') {
      if (answer.flagSecond === '-o') {
        fs.writeFileSync( answer.locationFile, convertTo.convertTxt(answer.location) )
        console.log('Successfully converted log file to Plaintext')
        return
      } else {
        fs.writeFileSync( fileTxt, convertTo.convertTxt(answer.location) )
        console.log('Successfully converted log file to Plaintext')
        return
      }
    }
  }
};

run();