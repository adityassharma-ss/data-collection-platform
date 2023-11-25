const express = require('express');
const mongoose = require('mongoose');
const { GoogleSpreadsheet } = require('google-spreadsheet');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB setup - Replace YOUR_MONGODB_CONNECTION_STRING with your actual MongoDB connection string
mongoose.connect('mongodb+srv://atlanbackend:atlend2369@cluster0.pfmbeg1.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Google Sheets setup
const doc = new GoogleSpreadsheet('YOUR_SPREADSHEET_ID');

app.use(express.json());

// MongoDB Schemas
const formSchema = new mongoose.Schema({
  title: String,
  questions: [{ text: String }],
});

const responseSchema = new mongoose.Schema({
  form: { type: mongoose.Schema.Types.ObjectId, ref: 'Form' },
  answers: [{ question: { type: mongoose.Schema.Types.ObjectId, ref: 'Form.questions' }, value: String }],
});

const Form = mongoose.model('Form', formSchema);
const Response = mongoose.model('Response', responseSchema);

// Express Routes
app.post('/forms', async (req, res) => {
  try {
    const form = await Form.create(req.body);
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/responses', async (req, res) => {
  try {
    const response = await Response.create(req.body);
    // Assuming you want to update Google Sheets here
    // Example: await updateGoogleSheet(response);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Google Sheets Integration
async function updateGoogleSheet(response) {
  await doc.useServiceAccountAuth(require('./config/credentials.json'));
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0]; // assuming the first sheet

  const row = {};
  response.answers.forEach(answer => {
    const question = answer.question.text; // assuming you stored question text in the question schema
    row[question] = answer.value;
  });

  await sheet.addRow(row);
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
