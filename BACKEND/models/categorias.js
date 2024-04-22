'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  categorias.init({
id_categoria: {
  type: DataTypes.INTEGER,
  allowNull: false,
  primaryKey: true
},
nombre: DataTypes.STRING(100)
  }, {
    sequelize,
    modelName: 'categorias',
  });
  return categorias;
};



/* 
id_categoria int not null primary key,
nombre varchar(100) */