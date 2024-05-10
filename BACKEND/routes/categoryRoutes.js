const express = require("express");
const {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { validateCategory } = require("../middlewares/category.middlewares");
const router = express.Router();

router.get("/", getAllCategories);
router.get("/:idCategoria", getCategoryById);
router.post("/", validateCategory, createCategory);
router.put("/:idCategoria", validateCategory, updateCategory);
router.delete("/:idCategoria", deleteCategory);

module.exports = router;