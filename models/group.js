const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true
  },
  group_id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('group', groupSchema);