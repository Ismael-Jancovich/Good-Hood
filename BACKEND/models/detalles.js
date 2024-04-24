'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detalles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      detalles.belongsTo(models.ordenes, { foreignKey: "id_orden" })
      detalles.belongsTo(models.productos, { foreignKey: "id_producto" })
    }
  }
  detalles.init({
id_detalles: {
type: DataTypes.INTEGER,
allowNull:false,
primaryKey:true
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
  return detalles;
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