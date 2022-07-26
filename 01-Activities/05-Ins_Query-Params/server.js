const express = require('express');
const termData = require('./terms.json');

const PORT = 3001;
const app = express();

// GET route to get the entire json file
app.get('/api/terms', (req, res) => res.json(termData));

// GET route that returns any specific value-key pair
// use :term to tell express that this is a path fragment
// path fragments are sort of like query parameters, but we're just adding another / instead of a ?
// query parameters are better because you get more options, but path fragments are still used
app.get('/api/terms/:term', (req, res) => {
  // Coerce the specific search term to lowercase
  // req.params.term is whatever the user types in
  const requestedTerm = req.params.term.toLowerCase();

  // Iterate through the terms name to check if it matches `req.params.term`
  // in this case, terms.json is an array that has many JSON objects inside of it, this is why we can loop over it. A .json file in vs code doesn't always have to be a JSON object, it just has to be written in JSON, we can definitely write an array that has multiple JSON objects inside of it
  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB, so the user typed something that is not connected to a value-key pair
  return res.json('No match found');
});

// Fallback route for when a user attempts to visit routes that don't exist
// this is like a 404 error page
app.get('*', (req, res) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
  )
);

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
