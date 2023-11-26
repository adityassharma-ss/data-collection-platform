const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  metadata: {
    type: Object,
    required: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
    },
  ],
});

module.exports = mongoose.model('Form', formSchema);
