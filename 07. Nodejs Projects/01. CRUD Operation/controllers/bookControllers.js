import Book from "../model/book.js";

const getAllBooks = async (req, res) => {
  try {
    const getAllBook = await Book.find({});
    if (getAllBook) {
      res.status(202).json({
        success: true,
        message: "All Book Founded Successfully",
        data: getAllBook,
      });
    }
  } catch (e) {
    res.status(404).json({
      success: false,
      message: "Something went wrong cannot find book",
    });
    console.log(e);
    process.exit(1);
  }
};
const getSingleBook = async (req, res) => {
  try {
    const getBookById = req.params.id;
    const getBook = await Book.findById(getBookById);
    if (getBook) {
      res.status(202).json({
        success: true,
        message: "Book found successfully",
        data: getBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
  } catch (e) {
    console.error("Error fetching book by ID:", e);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: e.message,
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const getBook = req.body;
    const newlyCreatedBook = await Book.create(getBook);
    if (newlyCreatedBook) {
      res.status(404).json({
        success: true,
        message: "Book was successfully created",
        data: newlyCreatedBook,
      });
    }
  } catch (e) {
    res.status(404).json({
      message: "Something went cannot add Book",
      success: false,
    });
    console.log("Book cannot be added", e);
  }
};
const updateBookById = async (req, res) => {
  try {
    const updateBookData = req.body;
    const getUpdateBookCurrentId = req.params.id;
    const updateBook = await Book.findByIdAndUpdate(
      getUpdateBookCurrentId,
      updateBookData,
      { new: true }
    );
    if (updateBook) {
      res.status(202).json({
        success: true,
        message: "Book updated successfully",
        data: updateBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book update failed",
      });
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
    console.log("Book added failed", e);
  }
};

const deleteBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const deleteById = await Book.findByIdAndDelete(getCurrentBookId);
    if (deleteById) {
      res.status(202).json({
        success: true,
        message: "Book added successfully",
        data: deleteById,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book id not found",
      });
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
    console.log("Error Deleting by ID: ", e);
  }
};

export { getAllBooks, getSingleBook, addNewBook, updateBookById, deleteBook };
