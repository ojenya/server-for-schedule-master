const Evaluate = require('../models/evaluate');

module.exports.getEvaluate = (req, res) => {
    Evaluate.find()
    .then( evaluate => res.send({ evaluate }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createEvaluate = (req, res) => {
  const { fio, evaluateId, evaluateValue } = req.body;
  Evaluate.create({ fio, evaluateId, evaluateValue  })
    .then( evaluate => res.send({ evaluate }) )
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }))
};