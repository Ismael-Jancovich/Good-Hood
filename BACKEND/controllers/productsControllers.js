const { where } = require("sequelize");

const Product = require("../models").Product;

const addProducts = async (req, res) => {
  try {
    const { nombre, precio, image, modelo, id_categoria, descripcion } = req.body;
    const user = await Product.create({ nombre, precio, image, modelo, id_categoria, descripcion });
    res.json({ msg: "Producto agregado exitosamente", data: user });
  } catch (error) {
    console.log(error)
  }
}

const getProducts = async (req, res) => {
  const { gender } = req.query
  const query = {}
  if (gender) {
    query.where = {
        modelo: gender
    }
  }
  console.log(query);
  const products = await Product.findAll({
    ...query,
    limit: Number(req.query.limit)
  });
  res.json({ msg: "Productos", data: products });
}

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  res.json({ msg: `Producto con id ${id}`, data: product });
}

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  await Product.update(product, {
    where: {
      id_product: id
    }
  });
  res.json({ msg: "Producto actualizado correctamente" });
}

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { id_product: id } });
  res.json({ msg: "Producto eliminado correctamente" });
}
module.exports = {
  addProducts,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
};