const data = require('../../data.json');

module.exports = function (req, res) {
  const cars = data.cars;

  res.status(200).json({ cars: cars });
};
