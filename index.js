/** @format */

const express = require("express");
const morgan = require("morgan");
require("dotenv").config({ path: ".env" });
require("./config")();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("combined"));

app.use("/api/books/", require("./route"));
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
