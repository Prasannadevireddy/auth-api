// app.js

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
