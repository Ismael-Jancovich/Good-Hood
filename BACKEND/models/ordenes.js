'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ordenes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsTo(models.usuario, { foreignKey: "id_usuario" })
    }
  }
  ordenes.init({
    id_orden: {
      type: DataTypes.INTEGREL,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGREL,
      references: {
        model: "users",
        key: "id_usuario"
      },
      fecha: DataTypes.DATETIME,
      total: DataTypes.DECIMAL(10, 2)
    }
  }, {
    sequelize,
    modelName: 'ordenes',
  });
  return ordenes;
};

/*
id_orden int not null primary key,
id_usuario int,
fecha DATETIME,
total decimal(10,2),
FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario)
*/