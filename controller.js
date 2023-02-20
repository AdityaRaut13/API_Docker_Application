/** @format */

const books = require("./model");

/*
    @path : /api/books
    @method : GET 
    @desc :  Returns the books collection
 */
async function get(req, res, next) {
  try {
    let book = await books.find({});
    res.json(book);
  } catch (err) {
    console.log(err);
    next(err);
  }
}
/*
    @path : /api/books
    @method : POST
    @desc : Add a book into DB and returns the added result.
 */
async function post(req, res, next) {
  if (!req.body) {
    console.log("Bad Request");
    res.status(400);
    next(new Error("Bad Request"));
  }
  try {
    let book = new books(req.body);
    await book.save();
    res.send(book);
  } catch (err) {
    console.log(err);
    res.status(500);
    next(err);
  }
}
/*
    @path : /api/books/:id
    @method : PUT
    @desc : Update the book into the DB using id field and returns it .
 */
async function put(req, res, next) {
  try {
    let book = await books.findById(req.params.id);
    if (!book) {
      console.log("Bad Request");
      res.status(400);
      next(new Error("Bad Request"));
    }
    await books.updateOne({ _id: req.params.id }, req.body);
    book = await books.findById(req.params.id);
    res.json(book);
  } catch (err) {
    console.log(err);
    res.status(500);
    next(err);
  }
}
/*
    @path  : /api/books/:id
    @method : delete
    @desc :  delete the records from the DB.
 */
async function del(req, res, next) {
  try {
    let book = await books.findById(req.params.id);
    if (!book) {
      console.log("Bad Request");
      res.status(400);
      next(new Error("Bad Request"));
    }
    // the book exists
    await books.deleteOne({ _id: req.params.id });
    res.json({ deletion: "success" });
  } catch (err) {
    console.log(err);
    res.status(500);
    next(err);
  }
}

module.exports = { get, post, put, del };
