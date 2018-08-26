const {
  getRandomWordSync,
  getRandomWord
} = require('word-maker')
const logger = require('./logger')

module.exports = {
  randomWordsSync: randomWordsSync,
  randomWordsFizzBuzzSync: randomWordsFizzBuzzSync,
  randomWordsFizzBuzz: randomWordsFizzBuzz
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
async function randomWordsSync () {
  for (let i = 1; i <= 100; i++) {
    let word = await getRandomWordSync()
    await logger.info(`${i}: ${word}`)
  }
}

/*
Modify your code to be a "Fizz Buzz" program. That is, print the numbers as in the previous step, but
for multiples of three, print "Fizz" (instead of the random word), for multiples of five, print "Buzz" and
for numbers which are both multiples of three and five, print "FizzBuzz".
*/
async function randomWordsFizzBuzzSync () {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) await logger.info(`${i}: Fizz Buzz`)
    else if (i % 3 === 0) await logger.info(`${i}: Fizz`)
    else if (i % 5 === 0) await logger.info(`${i}: Buzz`)
    else {
      let word = await getRandomWordSync()
      await logger.info(`${i}: ${word}`)
    }
  }
}

/*
Create a version of steps *1* and *2* using the **asynchronous** function, `getRandomWord`. This function
returns a Promise, which resolves to a random word string. The numbers may or may not be in numerical order.
*/

function randomWordsFizzBuzz () {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      getRandomWord()
        .then((word) => {
          logger.info(`${i}: ${word}`)
        })
    } else if (i % 3 === 0) {
      getRandomWord()
        .then((word) => {
          logger.info(`${i}: Fizz`)
        })
    } else if (i % 5 === 0) {
      getRandomWord()
        .then((word) => {
          logger.info(`${i}: Buzz`)
        })
    } else {
      getRandomWord()
        .then((word) => {
          logger.info(`${i}: ${word}`)
        })
    }
  }
}
