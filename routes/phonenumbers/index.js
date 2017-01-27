const router = require('express').Router();
import Phonenumber from '../../models/phonenumber'
import Database from '../../database/database'
import Table from '../../database/table'
//const findObject = require('../../utils/findObject');

//phonenumber.param('matchrule', findObject('car'));
var database = new Database();
//console.log(database.db)
var phonenumber = new Phonenumber(database);

var table = new Table('dialplan_config', 'matchrule')

router.get('/', (req, res) => {
  database.select(table, { matchrule: 'sip:8587645237@*'})
});

router.get('/:matchrule', (req, res) => {
  model.read(req.params.matchrule, res);
});

router.post('/', (req, res) => {
  model.create(req.body, res);
});

router.put('/', (req, res) => {
  model.update(req.body, res);
});

router.delete('/:matchrule', (req, res) => {
  model.delete(req.params.matchrule, res);
});

module.exports = router;
