import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    maxLength: [100, "Book title cannot be more than 100 characters"],
    required: [true, "Book title is Required"],
  },
  author: {
    type: String,
    required: [true, "Book author is required"],
  },
  year: {
    type: Number,
    required: [true, "Publication year is required"],
    min: [1000, "Publication year must be atleast 1000"],
    max: [new Date().getFullYear(), "You cannot be in the future"],
  },
});

const Book = new mongoose.model("Book", BookSchema);
export default Book;
