const models = require('express').Router();
const all = require('./all');
const single = require('./single');
const cars = require('./cars');
const findObject = require('../../utils/findObject');

//Attach callback findObject to modelId parameter.
//findObject verifies that a request is valid (else, return 404)
models.param('modelId', findObject('model'));

models.get('/', all);

models.get('/:modelId', single);

module.exports = models;
