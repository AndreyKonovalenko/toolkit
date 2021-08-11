const express = require('express');
const connectDB = require('./config/db');
const colors = require('colors');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

if (PORT === '8080') {
  PORT = 8081;
}

app.listen(PORT, () => {
  const msg = 'Server running on address: '.cyan.bold;
  console.log(
    process.env.C9_HOSTNAME == !undefined
      ? `'C9_HOSTNAME' ${process.env.C9_HOSTNAME} `
      : 'Server runs on the local machine!'
  );
  const hostname = process.env.C9_HOSTNAME
    ? `${process.env.C9_HOSTNAME}:${PORT}`.yellow.underline
    : `http://localhost:${PORT}`.yellow.underline;
  console.log(`${msg}${hostname}`);
});
