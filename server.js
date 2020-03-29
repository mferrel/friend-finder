//Dependencies
var express = require("express");
var path = require("path");

//express
var app = express();
var PORT = process.env.PORT || 3000;
//this creates a route to the public folder, makes it a local host
app.use(express.static("app/public"))
//middleware that parses the data that is coming in and turns it into json, makes it readable
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//this receives the export, passing the app selector and allows you to perform different types of request like GET, POST, UPDATE, DELETE
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes.js')(app);


//server listener
app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
});