const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        throw new Error('Something went wrong!');
      } else {
        res.send('Hello from Express!');
      }
    } catch (error) {
      console.error('Error in request handler:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});