const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Form',
    required: true,
  },
  submissionTimestamp: {
    type: Date,
    default: Date.now,
  },
  answers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Answer',
    },
  ],
});

module.exports = mongoose.model('Response', responseSchema);
