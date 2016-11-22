/*
    app.js

    STARTING POINT FOR THE APPLICATION. CREATES THE EXPRESS SERVER.

  ============================================================================
*/

//Include the required modules/packages
var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');

//Define our express app
var app = express();

//Configure our app to use the body parser package
//This package allows us to parse and easily access POST request data
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

//Connect to mysql database (connection.js)
connection.init();

//Application-level middleware
//(Middleware: functions that have access to the request object, response object, and the next middleware function)
//Mount the routes Router as middleware for the subpath /ns-api/
app.use('/ns-api', routes);

//Configure port 8000 to receive requests
var server = app.listen(8000, function() {
    console.log('Server listening on port ' + server.address().port);
})
