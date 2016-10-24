/*
  Starting point for the application. Creates the express server.
*/

//Include the required modules
var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');

//Create the express app
var app = express();

//Configure the body parser to accept POST requests
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

connection.init();
routes.configure(app);

//Configure port 8000 to receive requests
var server = app.listen(8000, function() {
  console.log('Server listening on port ' + server.address().port);
})
