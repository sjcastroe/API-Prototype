var connection = require('../database/connections');
import Model from './model'

export default class Phonenumber extends Model {
  read (matchrule, res) {
    this.database.select(this.table, { matchrule }).then( result => {
      res.status(200).send({ result })
    })
  }

  create (phonenumber, res) {
    this.database.insert(this.table, phonenumber).then( result => {
      res.status(200).send({ result })
    })
  }

  update (phonenumber, res) {
    console.log(phonenumber)
    this.database.update(this.table, phonenumber).then( result => {
      res.status(200).send({ result })
    })
  }

  delete (matchrule, res) {
    this.database.delete(this.table, { matchrule }).then( result => {
      res.status(200).send({ result })
    })
  }
}
