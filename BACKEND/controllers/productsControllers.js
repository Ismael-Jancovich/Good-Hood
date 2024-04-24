const Product = require("../models/product").Product;

function getAllProducts(req, res) {
  const product = Product.findAll();
  res.json(product);
}

function getProductById(req, res) {
  const id = req.params.id;
  const product = Product.findByPK(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}
function createProduct(req, res) {
  const newProduct = req.body;
  Product.addProduct(newProduct);
  res.status(201).json({ message: "Product created" });
}

function updateProduct(req, res) {
  const id = req.params.id;
  const updatedProduct = req.body;
  Product.update(id, updatedProduct);
  res.json({ message: "Product updated" });
}

function deleteProduct(req, res) {
  const id = req.params.id;
  Product.delete(id);
  res.json({ message: "Product deleted" });
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};