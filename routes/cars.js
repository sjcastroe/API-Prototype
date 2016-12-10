const all = require('../models/cars/all');
const single = require('../models/cars/single');
const findObject = require('../utils/findObject');
sergetest = findObject('car');
console.log(sergetest.toString());
module.exports.autoroute = {
    get: {
        '/cars': all,
        '/cars/:id': [sergetest, single]
    }
};

function authentication(req, res, next) {
    //get the user object or whatever
    console.log('sergetest1');
    next();
}
