/** @format */

const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
    author:String,
    country:String,
    imageLink:String,
    language:String,
    link:String,
    pages:Number,
    title:String,
    year: Number,
});

module.exports = mongoose.model("books", booksSchema);
