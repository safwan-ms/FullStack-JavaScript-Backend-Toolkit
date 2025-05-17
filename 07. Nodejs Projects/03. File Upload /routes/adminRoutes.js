import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import isAdmin from "../middleware/adminMiddleware.js";
const router = express.Router();

router.get("/welcome", authMiddleware, isAdmin, (req, res) => {
  res.json({
    message: "Welcome to admin page",
  });
});
export default router;
