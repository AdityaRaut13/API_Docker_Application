/** @format */

const express = require("express");
const route = express.Router();

const books = require("./model");

route.get("/", async (req, res) => {
  let book = await books.find({});
  res.json(book);
});

route.post("/", async (req, res) => {
  if (!req.body) {
    res.status(400);
    res.json({ error: "Bad Request" });
  }
  let book = new books(res.body);
  await book.save();
  return book;
});

route.put("/:id", async (req, res) => {
  let book = await books.findById(req.params.id);
  if (!book) {
    res.status(400);
    res.json({ error: "Bad Request" });
  }
  res.json(book);
});

route.delete("/:id", async (req, res) => {
  let book = await books.findById(req.params.id);
  if (!book) {
    res.status(400);
    res.json({ error: "Bad Request" });
  }
  res.json(book);
});

module.exports = route;
