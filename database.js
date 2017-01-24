import connection from './connection'

export default class Database {
  constructor () {
    this.geez = 'testinggg'
  }
  /*
  query () {

  }
  connection.acquire(function(err, con) {
    //Phonenumber specifies the columns to update
    //Phonenumber.id specifies the condition to be matched
    con.query('update dialplan_config set ? where matchrule = ?', [phonenumber, phonenumber.matchrule], function(err, result) {
      con.release();
      if (err) {
        res.send({status: 1, message: 'PHONENUMBER update failed'});
      } else {
        res.send({status: 0, message: 'PHONENUMBER updated successfully'});
      }
    });
  });
  */
}
