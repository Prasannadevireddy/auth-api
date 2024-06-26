// config/db.js

const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/auth_db';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;
