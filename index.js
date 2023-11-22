// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(config.get('db.connectionString'), { useNewUrlParser: true, useUnifiedTopology: true });

// Routes for Forms, Questions, Responses, etc.
// Implement these routes in separate files

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
