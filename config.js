/** @format */

const mongoose = require("mongoose");
require("dotenv").config();

async function connect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.db_path);
  } catch (e) {
    console.log(`Couldn't able to connect to database`);
    process.exit(1);
  }
}
module.exports = connect;
