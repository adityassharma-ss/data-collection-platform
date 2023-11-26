const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const formController = require('./controllers/formController');
const responseController = require('./controllers/responseController');
const integrationController = require('./controllers/integrationController');

const app = express();
const PORT = 3000;

// Use the MongoDB connection string from the environment variable
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Routes
app.post('/forms', formController.createForm);
app.post('/responses', responseController.createResponse);
app.post('/integrations/googleSheets', integrationController.googleSheetsIntegration);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
