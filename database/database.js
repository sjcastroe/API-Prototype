import util from 'util'
import connections from './connections'

export default class Database {
  stringify (fields) {
    return Object.keys(fields).reduce((previous, current) => util.format('%s%s = "%s", ', previous, current, fields[current]), '').slice(0, -2)
  }

  query (queryString) {
    return new Promise ((resolve, reject) => {
      connections.acquire((connection, error) => {
        connection.query(queryString, (error, result) => {
          connection.release()
          resolve(result)
        })
      })
    })
  }

  insert (table, fields) {
    let set = this.stringify(fields)
    let queryString = util.format('insert into %s set %s', table.name, set)
    return this.query(queryString)
  }

  select (table, fields) {
    let queryString = util.format('select * from %s where %s = "%s"', table.name, table.primary, fields[table.primary])
    return this.query(queryString)
  }

  update (table, fields) {
    let set = this.stringify(fields)
    let queryString = util.format('update %s set %s where %s = "%s"', table.name, set, table.primary, fields[table.primary])
    return this.query(queryString)
  }

  delete (table, fields) {
    let queryString = util.format('delete from %s where %s = "%s"', table.name, table.primary, fields[table.primary])
    return this.query(queryString)
  }
}
