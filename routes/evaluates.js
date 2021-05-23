const router = require('express').Router();

const { getEvaluate, createEvaluate } = require('../controllers/evaluates');
const Evaluate = require('../models/evaluate');


router.get('/', getEvaluate);
router.post('/', createEvaluate);

module.exports = router;