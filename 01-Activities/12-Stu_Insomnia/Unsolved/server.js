const express = require('express');
// Require the json file located in `/db`
const dbJSON = require('./db/repos.json')

// Create an `app` variable set to the value of `express()`
const app = express()

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

// Create a GET route for `/api` that will return the content of our json file
app.get('/api', (req, res) => {
  // whenever you use res.json or res.end , this actually ENDS the execution of this code block. So, make sure you put it at the end
  res.json(dbJSON)
});

// Have the app listen on port 3001
app.listen(3001)