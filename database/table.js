export default class Table {
  constructor (name, primary) {
    this._name = name
    this._primary = primary
  }

  get name () {
    return this._name
  }

  get primary () {
    return this._primary
  }
}
