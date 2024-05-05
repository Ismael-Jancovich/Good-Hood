'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nombre: DataTypes.STRING(100),
    apellido: DataTypes.STRING(100),
    mail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contraseña: {
      type: DataTypes.STRING(255),
      allowNull: false
    },  
    usuario: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    administrador: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

/* id_usuario int not null primary key,
nombre varchar(100),
apellido varchar(100),
administrador boolean default false,
contraseña varchar(16) not null,
usuario varchar(100) not null,
mail varchar (255) not null */