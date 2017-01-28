const router = require('express').Router()
import Phonenumber from '../../models/phonenumber'
import Database from '../../database/database'
import Table from '../../database/table'
//const findObject = require('../../utils/findObject')

//phonenumber.param('matchrule', findObject('car'))


var database = new Database()
var table = new Table('dialplan_config', 'matchrule')
var phonenumber = new Phonenumber(database, table)

router.get('/:matchrule', (req, res) => {
  phonenumber.read(req.params.matchrule, res)
})

router.post('/', (req, res) => {
  phonenumber.create(req.body, res)
})

router.put('/:matchrule', (req, res) => {
  phonenumber.update(Object.assign({ matchrule: req.params.matchrule }, req.body), res)
})

router.delete('/:matchrule', (req, res) => {
  phonenumber.delete(req.params.matchrule, res)
})

module.exports = router
