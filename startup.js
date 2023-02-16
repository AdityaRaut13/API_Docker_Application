/** @format */

require("dotenv").config({});
require("./config");
const books = require("./model");
const fs = require("fs");

fs.readFile("./books.json", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  let docs = JSON.parse(data);
  books.insertMany(docs).then(
    value => console.log(`successfully done ${value}`),
    reject => console.log(`Can't Insert ${reject}`)
  );
});
