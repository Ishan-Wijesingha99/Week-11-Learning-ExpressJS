// Import express
const express = require('express')
const path = require('module')

// Import 'terms.json' file
const termsJSON = require('./terms.json')
const PORT = 3001;

// Initialize app variable
const app = express()

// Create a route for a GET request that will return the content of our `terms.json` file
app.get('/terms', (req, res) => {
  res.json(termsJSON);
})

// listen to requests on this port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
