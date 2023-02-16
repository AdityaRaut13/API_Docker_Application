/** @format */

const mongoose = require("mongoose");
try {
  mongoose.set("strictQuery",false);
  mongoose.connect(process.env.db_path);
} catch (e) {
  console.log(`Couldn't able to connect to database`);
  process.exit(1);
}
