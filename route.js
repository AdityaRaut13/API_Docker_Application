/** @format */

const express = require("express");
const errorHandler = require("./error");
const route = express.Router();
const {
  get: getRequest,
  post: postBook,
  put: updateBook,
  del: delBook,
} = require("./controller");

route.route("/").get(getRequest).post(postBook);
route.route("/:id").put(updateBook).delete(delBook);
route.use(errorHandler);

module.exports = route;
