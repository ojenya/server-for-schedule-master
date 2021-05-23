const Group = require('../models/group');

module.exports.getGroups = (req, res) => {
  Group.find()
    .then( group => res.send({ group }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createGroup = (req, res) => {
  const { course, group_id } = req.body;
  Group.create({ course, group_id })
    .then( group => res.send({ group }) )
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }))
};