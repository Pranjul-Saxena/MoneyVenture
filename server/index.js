require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.get('/ping', (req, res) => {
    res.send('MoneyVenture Backend is running!');
});
// TODO: Add your API routes here later

//below in mongodb connection we start the server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Error: MONGODB_URI is not defined in .env file");
  process.exit(1); // Stop the application if DB connection string is missing
}

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB Connected Successfully');
    // Start the server only after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1); // Stop the application on connection error
  });