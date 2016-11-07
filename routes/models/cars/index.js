
//mergeParams -> tells the Router object to merge parameters that are created on
//this set of routes with the ones from its parents
const cars = require('express').Router();
const all = require('./all');
//const single = require('./single');

cars.get('/', all);
//cars.get('/:carId', single);

module.exports = cars;
