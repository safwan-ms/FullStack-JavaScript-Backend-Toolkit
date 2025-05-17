import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

const Book = mongoose.model("Book", BookSchema);
export default Book;
