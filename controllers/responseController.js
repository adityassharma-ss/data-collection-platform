const Response = require('../models/responseModel');

exports.createResponse = async (req, res) => {
  try {
    const response = await Response.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
