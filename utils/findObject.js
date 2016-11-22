const data = require('../data.json');

module.exports = function(type) {
    return function(req, res, next, value) {
        const typePlural = type + 's';
        const obj = data[typePlural].filter(function(t) {
            return t.id === (value * 1)
        })[0];

        if (obj) {
            req[type] = obj;
            next();
        } else {
            res.status(404).send('Invalid ' + type + ' ID');
        }
    };
};
