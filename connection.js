/***************************************************************************
 * Create a connection to a mysql database using the node.js mysql client. *
 ***************************************************************************/

//Include the mysql module
var mysql = require('mysql');

class Connection {
  constructor () {
    /** @var {Pool} A connection pool. A cache of database connections that makes it easy to share connections between requests.*/
    this.pool = null;
  }

  /**
   * Constructs a Connection object by initializing the internal pool variable.
   */
  init () {
    this.pool = mysql.createPool({
        connectionLimit: 10, //Limit the maximum connections to 10
        host: 'corp.netsapiens.com',
        user: 'dbSiPbx',
        password: 'sipbx',
        database: 'SiPbxDomain'
    });
  }

  /**
   * Acquires a connection from the pool
   * @param  {Function} callback Connection handler. Should release the connection after it is done using it.
   */
  acquire (callback) {
    this.pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
  }
}

export default (new Connection)
