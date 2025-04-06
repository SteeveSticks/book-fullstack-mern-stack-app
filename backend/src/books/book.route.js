const express = require("express");
const Book = require("./book.model");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteABook,
} = require("./bookController");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();

// frontend => backend server => controller => book schema => database => send to server => back to frontend
// post = when submiting something frontend to db(datababse)
// get = when to get somethin back from the db
// put/patch = when edit or uodate somthing
// delete = if you wsnt to delete something from the database

// post a book
router.post("/create-book", verifyAdminToken, postABook);

// get all books
router.get("/", getAllBooks);

// single book endpoint
router.get("/:id", getSingleBook);

// update a book endpoint
router.put("/edit/:id", verifyAdminToken, updateBook);

//delete a book
router.delete("/:id", verifyAdminToken, deleteABook);
module.exports = router;
