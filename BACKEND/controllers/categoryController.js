const Category = require("../models").categories;

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ["id_categoria", "name"], // Cambiado aquí
    });
    res.json({ data: categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};


const getCategoryById = async (req, res) => {
  try {
    const { id_categoria } = req.params;
    const category = await Category.findByPk(id_categoria);
    return res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory =  Category.create({ nombre: name });
    return res
      .status(201)
      .json({ message: "Categoria creada correctamente", data: newCategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};


const updateCategory = async (req, res) => {
  const oldCategory = req.body;
  const { id_categoria } = req.params;

  try {
    await Category.update(
      {
        name: oldCategory.name,
      },
      {
        where: {
          id: id_categoria,
        },
      }
    );
    return res.json({
      message: "Categoria actualizada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

const deleteCategory = async (req, res) => {
  const { id_categoria } = req.params;
  try {
    await Category.destroy({
      where: {
        id: id_categoria,
      },
    });
    return res.json({
      message: "Categoria eliminada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error inesperado en el servidor" });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};