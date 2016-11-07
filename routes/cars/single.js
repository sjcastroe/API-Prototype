const data = require('../../data.json');

module.exports = function (req, res) {
  const carId = req.params.carId * 1;
  const car = data.cars.filter(function (c) { return c.id === carId; })[0];

  res.status(200).json({ car: car });
};
