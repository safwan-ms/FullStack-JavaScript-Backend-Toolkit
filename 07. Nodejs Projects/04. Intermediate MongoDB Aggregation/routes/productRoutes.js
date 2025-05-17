import express from "express";
import {
  insertSampleProducts,
  getAllProducts,
  getProductStats,
  getProductAnalysis,
} from "../controllers/productController.js";
const router = express.Router();

router.post("/add", insertSampleProducts);
router.get("/get", getAllProducts);
router.get("/stats", getProductStats);
router.get("/analysis", getProductAnalysis);
export default router;
