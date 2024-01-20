const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 10000, 
    family: 4,        
  });
  const db = mongoose.connection;


db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api', employeeRoutes);

// Start the server
const port = config.port;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app; 
