import axios from 'axios';

let server_url;

//Development Mode

if (process.env.NODE_ENV === 'development') {
  // this is for C9 IDE development
  // we setup manually second port parameter for running server using REACT_APP_URL which is c9 environment variable
  // porcess.env.REACT_APP_URL contains app server url and set in package.json file only for divelopment in C9 IDE
  console.log(process.env)
  if (process.env.REACT_APP_URL) {
    server_url = process.env.REACT_APP_URL;
    console.log('this is axios server url:', server_url);
  }
  else {
    //  this is for local development
    server_url = ''
  }
}

// Production
// host on Heroku

if (process.env.NODE_ENV === 'production') {
  server_url = '';
}

const instance = axios.create({
  baseURL: server_url
});

export default instance;
