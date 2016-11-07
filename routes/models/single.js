const data = require('../../data.json');

module.exports = function (req, res) {
  const modelId = req.params.modelId * 1;
  const model = data.models.filter(function (m) { return m.id === modelId; })[0];

  res.status(200).json({ model: model });
};
