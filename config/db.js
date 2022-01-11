const mongoose = require('mongoose');
const dotenv  = require("dotenv");


module.exports = async function connection() {
  try{
    const connectionParams = {
      useNewUrlParser:true,
      useUnifiedTopology: true
    };
    await mongoose.connect("mongodb://localhost:27017/socials", connectionParams);
    console.log("database is connected")
  } catch(err) {
    console.log(err, "could not connect to database" )
  }
}


