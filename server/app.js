const express = require('express');
const app = express();
const port = 3000;

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', '../client');

// Tell express to use a 'static' folder
app.use(express.static('../client/static'));

// Link the templating engine to the express app
app.set('view engine', 'ejs');

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


// ROUTES!!!


// GET 
app.get('/', function(req, res) {
  res.render('index', null);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));