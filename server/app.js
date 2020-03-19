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


// GET first image on main page
app.get('/', function(req, res) {
  res.redirect('/image/0');
});

// GET image name by id
app.get('/image/:id', function(req, res) {
  //get image
  const id = req.params.id;
  const imageName = require("./modules/Images.js").getImageNameById(id);

  res.render('index', {"imageName": imageName});
});

// POST upload new image 
app.post('/insert-image', function(req, res) {
   
  res.render('index', null);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));