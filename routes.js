var phonenumber = require('./model/phonenumber');


//Each route is an HTTP method (verb) with a specific URL endpoint (noun)
module.exports = {
  configure: function(app) {
    app.get('/phonenumber/:matchrule', function(req, res){
      phonenumber.get(req.params.matchrule, res);
    });

    app.post('/phonenumber/', function(req, res) {
      phonenumber.create(req.body, res);
    });

    app.put('/phonenumber/', function(req, res) {
      phonenumber.update(req.body, res);
    });

    app.delete('/phonenumber/:matchrule', function(req, res) {
      phonenumber.delete(req.params.matchrule, res);
    });
  }
};
