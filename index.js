const express = require('express');
const mongoose = require('mongoose');
const formController = require('./controllers/formController');
const responseController = require('./controllers/responseController');
const integrationController = require('./controllers/integrationController');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://atlanbackend:atlend2369@cluster0.pfmbeg1.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Routes
app.post('/forms', formController.createForm);
app.post('/responses', responseController.createResponse);
app.post('/integrations/googleSheets', integrationController.googleSheetsIntegration);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
