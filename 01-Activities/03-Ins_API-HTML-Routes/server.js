const express = require('express');

const PORT = 3001;
const app = express();



app.get('/', (req, res) => {
  // can send back HTML by using .send()
  // can write as much HTML in .send() as you like
  // what it actually sends back is a html file with nothing in the head, and only what you write in .send() in the body
  res.send(
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>
    <p>This is another p tag</p>`
  );
});



app.get('/api', (req, res) => {
  // this sends back a json object
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
