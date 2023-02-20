/** @format */

require("./config")();
const books = require("./model");
const fs = require("fs");
const mongoose=require('mongoose');

fs.readFile("./books.json", { encoding: "utf-8" },async  (err, data) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  let docs = JSON.parse(data);
  for(let i=0;i<docs.length;i++)
    await books.create(docs[i]);
  await mongoose.connection.close();
});
