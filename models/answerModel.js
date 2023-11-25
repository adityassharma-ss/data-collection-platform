const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  response: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Response',
    required: true,
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Answer', answerSchema);
