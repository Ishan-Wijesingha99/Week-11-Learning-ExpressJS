const express = require('express');

const PORT = 3001;

const app = express();



app.get('/api/reviews', (req, res) => {
  
  // Show the user agent information in the terminal
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);

  // req.method is what type of request it is, either GET, or POST, or whatever
  res.json(`${req.method} request received`);
});



// POST request
app.post('/api/reviews', (req, res) => {
  // Let the client know that their POST request was received
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
