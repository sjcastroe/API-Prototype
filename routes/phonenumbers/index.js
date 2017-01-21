const phonenumber = require('express').Router();
const model = require('../../models/phonenumber');
//const findObject = require('../../utils/findObject');

//phonenumber.param('matchrule', findObject('car'));

phonenumber.get('/', (req, res) => {
  model.readCollection(res);
});

phonenumber.get('/:matchrule', (req, res) => {
  model.read(req.params.matchrule, res);
});

phonenumber.post('/', (req, res) => {
  model.create(req.body, res);
});

phonenumber.put('/', (req, res) => {
  model.update(req.body, res);
});

phonenumber.delete('/:matchrule', (req, res) => {
  model.delete(req.params.matchrule, res);
});

module.exports = phonenumber;
