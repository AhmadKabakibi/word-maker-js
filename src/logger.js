const fs = require('fs')
const util = require('util')
const path = require('path')

// flags: 'w' Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
const logFile = fs.createWriteStream(path.join(__dirname, '..', 'debug.log'), {flags: 'w'})
const logStdout = process.stdout

module.exports = {
  info: (stream) => {
    logFile.write(util.format(stream) + '\n')
    logStdout.write(util.format(stream) + '\n')
  }
}
