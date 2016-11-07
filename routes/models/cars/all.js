const data = require('../../../data.json');

module.exports = function (req, res) {
  const modelId = req.params.modelId * 1;
  const cars = data.cars.filter(function (c) { return c.modelId === modelId });

  res.status(200).json({ cars : cars });
};
