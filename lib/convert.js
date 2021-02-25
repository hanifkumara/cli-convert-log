const fs = require('fs');

module.exports = {
  convertJson: () => {
    const text = fs.readFileSync('example-logfile/example-log.log', 'utf8')
    const splitArr = text.split('\n')
    const result = []
    const dateTime = []
    const log = []
    for (let i = 0; i < splitArr.length; i++) {
      const index = splitArr[i].indexOf(':') + 5
      dateTime.push(splitArr[i].slice(0, index))
    }
    for (let i = 0; i < splitArr.length; i++) {
      const index = splitArr[i].indexOf(':') + 5
      log.push(splitArr[i].slice(index + 2, splitArr[i].length))
    }
    for (let i = 0; i < splitArr.length; i++) {
      result.push(JSON.stringify({
        "date" : dateTime[i],
        "log" : log[i]
      }))
    }
    return result.toString()
  },
  convertTxt: () => {
    const result = fs.readFileSync('example-logfile/example-log.log', 'utf8')
    return result.toString()
  }
}