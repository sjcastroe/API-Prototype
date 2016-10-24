var connection = require('../connection');

function Phonenumber() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from dialplan_config', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(phonenumber, res) {
    connection.acquire(function(err, con) {
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

  this.update = function(phonenumber, res) {
    connection.acquire(function(err, con) {
      con.query('update dialplan_config set ? where id = ?', [phonenumber, phonenumber.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'PHONENUMBER update failed'});
        } else {
          res.send({status: 0, message: 'PHONENUMBER updated successfully'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from dialplan_config where id = ?', [id], function(err, result) {
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
