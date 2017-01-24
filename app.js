/**********************************************************************************
 * Starting point for the application. Creates and configures the express server.
 **********************************************************************************/

//Include the required modules/packages
var express = require('express');
var bodyparser = require('body-parser');
var morgan = require('morgan');
var connection = require('./connection');
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

//Enable logging of request data on the console
app.use(morgan('dev'));

//Connect to mysql database (connection.js)
connection.init();

//Mount the routes Router as middleware for the subpath /ns-api/
app.use('/ns-api', routes);

//Configure port 8000 to receive requests
var server = app.listen(3000, () => {
    console.log('Server listening on port ' + server.address().port);
})
