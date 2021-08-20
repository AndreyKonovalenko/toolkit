const express = require('express');
const connectDB = require('./config/db');
const colors = require('colors');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


// // Enable CORS for develompent

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE'); // I allowed only needed methods
  //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


let PORT = process.env.PORT || 5000;

// if (PORT === '8080') {
//   PORT = 8081;
// }

app.listen(PORT, () => {
  const msg = 'Server running on address: '.cyan.bold;
  console.log(
    process.env.C9_HOSTNAME
      ? `'C9_HOSTNAME' ${process.env.C9_HOSTNAME} `
      : 'Server runs on the local machine!'
  );
  const hostname = process.env.C9_HOSTNAME
    ? `${process.env.C9_HOSTNAME}:${PORT}`.yellow.underline
    : `http://localhost:${PORT}`.yellow.underline;
  console.log(`${msg}${hostname}`);
});
