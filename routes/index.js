//We create a new instance of Router in Express
const routes = require('express').Router();
const phonenumber = require('./phonenumbers');

//Create a route at the root path of new Router
routes.get('/', function (req, res) {
  res.status(200).send('Welcome to the new NetSapiens API');
});

routes.use('/phonenumbers', phonenumber);

module.exports = routes;
