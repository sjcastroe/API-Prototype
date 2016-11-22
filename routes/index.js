/*
    routes/index.js

    ROOT FILE FOR ALL ROUTES.

  ============================================================================
*/

//We create a new instance of Router in Express
const routes = require('express').Router();
const models = require('./models');
const cars = require('./cars');

//Create a route at the root path of new Router
routes.get('/', function(req, res) {
    res.status(200).send('Welcome to the new NetSapiens API');
});

routes.use('/models', models);

routes.use('/cars', cars);

module.exports = routes;
