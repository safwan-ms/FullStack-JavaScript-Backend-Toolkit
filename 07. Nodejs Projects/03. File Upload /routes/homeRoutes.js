import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/welcome", authMiddleware, (req, res) => {
  res.json({
    message: "welcome to home page",
  });
});
export default router;
