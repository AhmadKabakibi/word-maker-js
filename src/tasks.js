const { getRandomWordSync, getRandomWord } = require('word-maker')
const logger = require('./logger')

module.exports = {
  taskOne: taskOne
}

/*
Print numbers from 1 to 100 to the console, but for each number also print a random word using the function `getRandomWordSync`. E.g.
```
1: four
2: firm
3: shape
4: choice
5: coach
6: purple
...
100: buffalo
*/
async function taskOne () {
  for (let i = 1; i <= 100; i++) {
    let word = await getRandomWordSync()
    await logger.info(`${i}: ${word}`)
  }
}
