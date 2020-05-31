const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURL");

console.log("2");

const connectDB = async () => {
  try {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); //! it returns the PROMISE
    console.log("*****Connected");
  } catch (error) {
    console.log(`ERROR ------- ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
