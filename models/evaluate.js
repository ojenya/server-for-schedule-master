const mongoose = require('mongoose');

const evaluateSchema = new mongoose.Schema({
    fio: {
    type: String,
    required: true
  },
  evaluateId: {
    type: String,
    required: true
  },
  evaluateValue: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('evaluate', evaluateSchema);

