const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.post("/", createProduct); // Create
router.get("/getAll", getAllProducts); // Read all
router.get("/:id", getProductById); // Read one
router.put("/:id", updateProduct); // Update
router.delete("/:id", deleteProduct); // Delete

module.exports = router;
