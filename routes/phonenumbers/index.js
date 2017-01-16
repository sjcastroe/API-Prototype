const phonenumbers = require('express').Router();
const model = require('../../models/phonenumber');
//const findObject = require('../../utils/findObject');

//phonenumbers.param('matchrule', findObject('car'));

//phonenumbers.get('/', model.read);

phonenumbers.get('/phonenumber/:matchrule', (req, res) => {
  model.read(req.params.matchrule, res);
});

phonenumbers.post('/phonenumber/', (req, res) => {
  model.create(req.body, res);
});

phonenumbers.put('/phonenumber/', (req, res) => {
  phonenumber.update(req.body, res);
});

phonenumbers.delete('/phonenumber/:matchrule', (req, res) => {
  phonenumber.delete(req.params.matchrule, res);
});

module.exports = phonenumbers;
