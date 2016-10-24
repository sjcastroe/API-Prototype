var phonenumber = require('./model/phonenumber');


//Each route is an HTTP method (verb) with a specific URL endpoint (noun)
module.exports = {
  configure: function(app) {
    app.get('/phonenumber/', function(req, res){
      phonenumber.get(res);
    });

    app.post('/phonenumber/', function(req, res) {
      phonenumber.create(req.body, res);
    });

    app.put('/phonenumber/', function(req, res) {
      phonenumber.update(req.body, res);
    });

    app.delete('/phonenumber/', function(req, res) {
      phonenumber.delete(req.params.id, res);
    });
  }
};
