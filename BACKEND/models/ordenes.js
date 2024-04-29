'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ordenes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ordenes.belongsTo(models.User, { foreignKey: "id_usuario" })
    }
  }
  Ordenes.init({
    id_orden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id_usuario"
      },
    },
    fecha: DataTypes.DATE,
    total: DataTypes.DECIMAL(10, 2)
  }, {
    sequelize,
    modelName: 'Ordenes',
  });
  return Ordenes;
};

/*
id_orden int not null primary key,
id_usuario int,
fecha DATETIME,
total decimal(10,2),
FOREIGN KEY (id_usuario) REFERENCES usuarios (id_usuario)
*/