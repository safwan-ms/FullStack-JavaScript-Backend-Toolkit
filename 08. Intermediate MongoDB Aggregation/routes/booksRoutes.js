import express from "express";
import {
  createAuthor,
  createBook,
  getBookWithAuthor,
} from "../controllers/bookController.js";
const router = express.Router();

router.post("/author", createAuthor);
router.post("/book", createBook);
router.get("/:id", getBookWithAuthor);

export default router;
