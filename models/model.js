import database from '../database/database'
import table from '../database/table'

export default class Model {
  constructor (database, table) {
    this._database = database
    this._table = table
  }

  get database () {
    return this._database
  }

  set database (database) {
    this._database = database
  }

  get table () {
    return this._table
  }

  set table (table) {
    this._table = table
  }
}
