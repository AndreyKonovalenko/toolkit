const mongoose = require('mongoose');
const config = require('config');
const db = require('./default').mongoURI;

const connectDB = () => {
  mongoose
    .createConnection(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected !'))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
