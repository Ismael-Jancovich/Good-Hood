'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detalles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Detalles.belongsTo(models.Ordenes, { foreignKey: "id_orden" })
      Detalles.belongsTo(models.Product, { foreignKey: "id_producto" })
    }
  }
  Detalles.init({
    id_detalles: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_producto: {
      type: DataTypes.INTEGER,
      references: {
        model: "productos",
        key: "id_producto"
      }
    },
    id_orden: {
      type: DataTypes.INTEGER,
      references: {
        model: "ordenes",
        key: "id_orden"
      }
    },
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL(10, 2)
  }, {
    sequelize,
    modelName: 'detalles',
  });
  return Detalles;
};


/*
id_detalles int not null primary key,
id_producto int,
id_orden int,
cantidad int,
precio decimal(10,2),
FOREIGN KEY (id_producto) REFERENCES productos (id_producto),
FOREIGN KEY (id_orden) REFERENCES ordenes (id_orden)
*/