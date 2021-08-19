const mongoose = require('mongoose');
const db = require('./default').mongoURI;

const connectDB = async () => {
  try{
    await mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
    console.log(`MongoDB Connected!`);
  } catch (err) {
    console.error(err.massage);
    // Exit process with failure
    process.exit(1);
  }
};


module.exports = connectDB;
