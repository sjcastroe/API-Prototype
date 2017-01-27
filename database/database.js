import connections from './connections'
import util from 'util'

export default class Database {
  stringify (fields) {
    return Object.keys(fields).reduce((previous, current) => previous + current + ' = ' + fields[current] + ', ', '')
  }

  query (queryString) {
    //console.log(connections.pool.config.connectionConfig)
    connections.acquire((connection, error) => {
      console.log('testing')
      console.log(connection)
      console.log(error)
      connection.query(queryString, (error, result) => {
        connection.release()
      });
    });
  }

  insert (table, fields) {
    var set = this.stringify(fields)
    var queryString = util.format('insert into %s set %s', table.name, set)
    this.query(queryString)
  }

  select (table, fields) {
    var queryString = util.format('select * from %s where %s = `%s`', table.name, table.primary, fields[table.primary])
    console.log(queryString)
    this.query(queryString)
  }

  update (table, fields) {
    set = this.stringify(fields)
    var queryString = util.format('update %s set %s where %s = %s', table.name, set, table.primary, fields[table.primary])
    this.query(queryString)
  }

  delete () {
    var queryString = util.format('delete from %s where %s = %s', table.name, table.primary, fields[table.primary])
    this.query(queryString)

  }
}
