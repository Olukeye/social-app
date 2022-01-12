const mongoose = require('mongoose');
require('dotenv').config();


module.exports = async function connection() {
  try{
    const connectionParams = {
      useNewUrlParser:true,
      useUnifiedTopology: true
    };
    await mongoose.connect(process.env.MONGO_URI, connectionParams);
    console.log("database is connected")
  } catch(err) {
    console.log(err, "could not connect to database" )
  }
}


