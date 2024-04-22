'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {
      Product.belongsTo(models.Categorias, { foreignKey: "id_categoria" })
    }
  }
  Product.init({
    id_producto: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    descripcion: DataTypes.STRING(250),
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categoria",
        key: "id_categoria"
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};



/*
id_producto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
id_categoria INT NOT NULL,
nombre varchar(100) NOT NULL,
descripcion varchar(250),
precio decimal(10,2) NOT NULL,
FOREIGN KEY (id_categoria) REFERENCES categorias (id_categoria)
 */