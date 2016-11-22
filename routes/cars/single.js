const data = require('../../data.json');

module.exports = function(req, res) {
    const car = req.car;

    res.status(200).json({
        car: car
    });
};
