//Dependencies
var express = require("express");
var path = require("path");

//express
var app = express();
var PORT = process.env.PORT || 3000;

//server listener
app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
});

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);