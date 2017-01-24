import Database from '../database'

export default class Model {
  constructor (db) {
    this.database = db;
  }

  show () {
    return this.database;
  }
}
