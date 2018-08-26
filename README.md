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

1. Create a version of steps *1* and *2* using the **asynchronous** function, `getRandomWord`. This function
returns a Promise, which resolves to a random word string. The numbers may or may not be in numerical order.

4. Add error handling to both the synchronous and asynchronous solutions (calling `getRandomWord({ withErrors: true })` will intermitently throw an error instead of return a random word). When an error is caught, the programm should print "Doh!" instead of the random word, "Fizz", "Buzz" or "FizzBuzz"

5. For **Node.JS developers**: Instead of printing the console. Write the information to a file in the root of this project. For **Frontend** developers, send your result to an HTTP endpoint (since there is no running endpoint, this
part of your solution does not need to actually run)
