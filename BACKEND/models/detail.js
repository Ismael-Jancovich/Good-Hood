'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Detail.belongsTo(models.Order, { foreignKey: "id_orden" })
      Detail.belongsTo(models.Product, { foreignKey: "id_producto" })
    }
  }
  Detail.init({
    id_detalles: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_producto: {
      type: DataTypes.INTEGER,
      references: {
        model: "Product",
        key: "id_producto"
      },
    },
    id_orden: {
      type: DataTypes.INTEGER,
      references: {
        model: "Order",
        key: "id_orden"
      }
    },
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.DECIMAL(10, 2)
  }, {
    sequelize,
    modelName: 'Detail',
  });
  return Detail;
};