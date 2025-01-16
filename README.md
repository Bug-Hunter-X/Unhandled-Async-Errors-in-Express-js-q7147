# Unhandled Async Errors in Express.js

This repository demonstrates a common error in Express.js applications: unhandled errors within asynchronous request handlers.  Improper error handling in async functions can lead to crashes without informative error messages.

## The Bug
The `bug.js` file contains an Express.js server with a route that simulates an asynchronous operation.  This operation randomly throws an error, but the error is not properly caught.

## The Solution
The `bugSolution.js` file shows how to properly handle this error using `try...catch` blocks within the asynchronous function or by using middleware to catch unhandled errors globally.