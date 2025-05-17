import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import adminRoutes from "../middleware/adminMiddleware.js";
import {
  imageUploadController,
  fetchImagesController,
  deleteImageController,
} from "../controllers/imageController.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";
const router = express.Router();

//upload the image
router.post(
  "/upload",
  authMiddleware,
  adminRoutes,
  uploadMiddleware.single("image"),
  imageUploadController
);

//to get all the image
router.get("/fetch-images", fetchImagesController);
router.delete("/:id", authMiddleware, adminMiddleware, deleteImageController);

export default router;

// 6783c9d5833500e257d97817
