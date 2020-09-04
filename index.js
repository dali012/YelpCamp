const express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campGrounds = [
  {name: "Salmon Creek", image:"https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350"},
  {name: "Granite Hill", image:"https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&h=350"},
  {name: "Mountain Goat's Rest", image:"https://pixabay.com/get/57e1d14a4e52ae14f1dc84609620367d1c3ed9e04e5074407c2e78d6944fc4_340.jpg"}
];

app.get("/", function(req, res){
  res.render("landing")
});

app.get("/campgrounds", function(req, res){
  res.render("campGrounds", {campGrounds: campGrounds});
});

app.get("/campgrounds/new", function(req, res){
  res.render("new");
});

app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image_URL = req.body.image;
  var newCampGround = {name: name, image: image_URL};
  campGrounds.push(newCampGround);
  res.redirect("/campgrounds");
});

app.listen(8080, function(){
  console.log("server started! \nport : 8080");
});