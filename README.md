Harver JS Assessment
============================

## Get started

Set this repository up by running:

```
npm install
```

The tasks in this assessment use the included package `word-maker` which can be found in the directory
`./word-maker`. This directory also contains a *README.md* with details about its usage and API. The module
is already *required* for you in `src/index.js`

## Tasks

1. Add error handling to both the synchronous and asynchronous solutions (calling `getRandomWord({ withErrors: true })` will intermitently throw an error instead of return a random word). When an error is caught, the programm should print "Doh!" instead of the random word, "Fizz", "Buzz" or "FizzBuzz"