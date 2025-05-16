import express from "express";
import {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBookById,
  deleteBook,
} from "../controllers/bookControllers.js";
const router = express.Router();

router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBook);
router.post("/add", addNewBook);
router.put("/update/:id", updateBookById);
router.delete("/delete/:id", deleteBook);

export default router;
