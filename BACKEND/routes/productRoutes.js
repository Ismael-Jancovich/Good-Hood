const express = require('express');
const {
     addProducts, 
    getProducts, 
    getProductById, 
    updateProduct,
     deleteProduct } = require('../controllers/productsControllers');

const productsRouter = express.Router();

productsRouter.post("/", addProducts);
productsRouter.get("/", getProducts);
productsRouter.get("/:id", getProductById);
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);

module.exports = productsRouter;