/**********************************************************************************
 * Starting point for the application. Creates and configures the express server.
 **********************************************************************************/

//Include the required modules/packages
var express = require('express');
var bodyparser = require('body-parser');
var routes = require('./routes');

import connection from './connection'

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
//(Middleware: A function that is executed in a route path. The function has access
//to the request and response objects. It also has access to the next middleware function
//in the route in case it doesn't return a response itself.)
//Mount the routes Router as middleware for the subpath /ns-api/
app.use('/ns-api', routes);

//Configure port 8000 to receive requests
var server = app.listen(3000, () => {
    console.log('Server listening on port ' + server.address().port);
})
