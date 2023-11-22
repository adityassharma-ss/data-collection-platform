// models/Form.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  metadata: {
    organization: String,
    purpose: String,
    locale: String,
  },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
});

module.exports = mongoose.model('Form', formSchema);
