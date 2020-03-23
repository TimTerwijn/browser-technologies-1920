const express = require('express');
const app = express();
const multer  = require('multer');

const port = 3000;

// Tell the views engine/ejs where the template files are stored (Settingname, value)
app.set('views', '../client');

// Tell express to use a 'static' folder
app.use(express.static('../client/static'));

// Link the templating engine to the express app
app.set('view engine', 'ejs');

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "../client/static/img/"); //here we specify the destination. in this case i specified the current directory
  },
  filename: function(req, file, cb) {
    console.log(file); //log the file object info in console
    cb(null, file.originalname);//here we specify the file saving name. in this case. i specified the original file name .you can modify this name to anything you want
  }
});

const uploadDisk = multer({ storage: storage });


// ROUTES!!!


// GET first image on main page
app.get('/', function(req, res) {
  res.redirect('/image/0');
});

// GET image name by id
app.get('/image/:id', function(req, res) {
  //get image name
  const id = req.params.id;
  const images = require("./modules/Images.js");
  const imageName = images.getImageNameById(id);

  res.render('index', {"imageName": imageName, "nextId" : images.getNextID()});
});

// POST upload new image 
app.get('/insert-image', function(req, res) {
   
  res.render('add-image', null);
});

// POST upload new image 
app.post('/insert-image', uploadDisk.single("picture"), (req, res) => {
  console.log(" file disk uploaded");
  res.send("file disk upload success");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));