const express = require('express');
const connectDB = require('./config/db');
const https = require('https');
const http = require('http');
const colors = require('colors');
const fs = require('fs');


const key = fs.readFileSync('./sslcert/server.key');
const cert = fs.readFileSync('./sslcert/server.crt');

const credentials = {
  key: key,
  cert: cert
};

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

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


// http server settings

let PORT = process.env.PORT || 5005;

if (PORT === '8080') {
  PORT = 8081;
}

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
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

// https sever settings

const httpsPort = 8443;
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(httpsPort, () => {
   const msg = 'https server running on address: '.cyan.bold;
   const hostname = `${process.env.C9_HOSTNAME}:${httpsPort}`.yellow.underline;
   console.log(`${msg}${hostname}`);
});