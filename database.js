import connection from './connection'

export default class Database {

  query (model, action, queryString, table, fields, primaryKey) {
    connection.acquire(function(err, con) {
      con.query(queryString, [table, fields, primaryKey], function(err, result) {
        con.release()
        if (err) {
          res.send({status: 1, message: util.format('%s %s failed', model, action) })
        } else {
          res.send({status: 0, message: util.format('%s %s successful', model, action) })
        }
      });
    });
  }

  create (table, fields, primaryKey) {
    var queryString = 'insert into ? set ?'
    query(model, action, queryString, table, fields, primaryKey)
  }

  read (model, table, fields, primaryKey) {
    var queryString = 'select * from ? where matchrule = ?'
    query(model, action, queryString, table, fields, primaryKey)
  }

  update (model, table, fields, primaryKey) {
    var queryString = 'update ? set ? where matchrule = ?'
    query(model, action, queryString, table, fields, primaryKey)
  }



}
