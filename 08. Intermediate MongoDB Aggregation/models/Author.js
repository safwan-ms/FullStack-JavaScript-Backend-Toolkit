import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  name: String,
  bio: String,
});

const Author = mongoose.model("Author", AuthorSchema);

export default Author;
