const data = require('../../data.json');

module.exports = function(req, res) {
    //console.log(req.params.id);
    console.log('sergetest2');
    const car = req.car;

    res.status(200).json({
        car: car
    });
};
