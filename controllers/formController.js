const Form = require('../models/formModel');

exports.createForm = async (req, res) => {
  try {
    const form = await Form.create(req.body);
    res.status(201).json(form);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
