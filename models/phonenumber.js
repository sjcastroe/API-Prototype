var connection = require('../connection');

class Phonenumber {
  read (matchrule, res) {
    //Acquire the connection, execute the query and send back the results as the response
    connection.acquire(function(err, con) {
      con.query('select * from dialplan_config where matchrule = ?', [matchrule], function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  create (phonenumber, res) {
    connection.acquire(function(err, con) {
      //Keys of Phonenumber object will be mapped to the column names in the dialplan_config table, values will be set when query is executed
      //(This means the keys in Phonenumber should match the columns in the table)
      con.query('insert into dialplan_config set ?', phonenumber, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'PHONENUMBER creation failed'});
        } else {
          res.send({status: 0, message: 'PHONENUMBER created successfully'});
        }
      });
    });
  };

  update (phonenumber, res) {
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
  };

  delete (matchrule, res) {
    connection.acquire(function(err, con) {
      con.query('delete from dialplan_config where matchrule = ?', [matchrule], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };
}
module.exports = new Phonenumber();
