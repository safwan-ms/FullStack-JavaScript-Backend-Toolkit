import Book from "../models/Book.js";
import Author from "../models/Author.js";

const createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(202).json({
      success: true,
      data: author,
    });
  } catch (error) {
    console.error(
      "Something went wrong in CreateAuthorController ",
      error.message
    );
    return res.status(500).json({
      success: true,
      message: "Something went wrong, please try again later",
    });
  }
};

const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    return res.status(202).json({
      success: true,
      data: book,
    });
  } catch (error) {
    console.error(
      "Something went wrong in CreateBookController ",
      error.message
    );
    return res.status(500).json({
      success: true,
      message: "Something went wrong, please try again later",
    });
  }
};

const getBookWithAuthor = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("author");
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    return res.status(202).json({
      success: true,
      message: book,
    });
  } catch (error) {
    console.error("Error occurred in getBookWithAuthor", error.message);
    return res.status(500).json({
      success: true,
      message: "Something went wrong, please try again later",
    });
  }
};

export { createAuthor, createBook, getBookWithAuthor };
