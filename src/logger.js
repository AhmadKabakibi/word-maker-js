const fs = require('fs')
const util = require('util')
const path = require('path')

/*
For **Node.JS developers**: Instead of printing the console.
Write the information to a file in the root of this project.
For **Frontend** developers, send your result to an HTTP endpoint (since there is no running endpoint, this
part of your solution does not need to actually run)
*/

// flags: 'w' Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
const logFile = fs.createWriteStream(path.join(__dirname, '..', 'debug.log'), {flags: 'w'})
const logStdout = process.stdout

module.exports = {
  info: (stream) => {
    logFile.write(util.format(stream) + '\n')
    logStdout.write(util.format(stream) + '\n')
  }
}
