
// need to get express module and path module
const express = require('express');
const path = require('path');


// create an app by invoking express(). This shows express module is just a method.
const app = express();

// create a port to set up this page
const PORT = 3001;

// this is how you tell express where your index.html file and all other static pages you are planning to use are 
app.use(express.static('public'));

// '/' is for the homepage
// you going to send them back a message which is 'Navigate to /send or /routes'
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

// this is for the /send page
app.get('/send', (req, res) =>
  // you are sending back this html file to render on their browser
  // what's really cool is that we can send back basically anything. We can send back only a png or even send back a pdf
  // you can check what's been sent back in the networks tab on the chrome devtools, the size of the files, how long it took, their names etc 
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

// this is for the /routes page
app.get('/routes', (req, res) =>
  // you are sending back this html file to render on their browser
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

// this will cause node to continually listen for requests on PORT
// this is equivalent to starting the application
app.listen(PORT, () =>
  // this callback is executed once the port 3001 has been started
  console.log(`Example app listening at http://localhost:${PORT}`)
);
