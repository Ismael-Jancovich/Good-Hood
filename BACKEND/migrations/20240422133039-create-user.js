'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id_usuario:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nombre: Sequelize.STRING(100),
      apellido: Sequelize.STRING(100),
      mail:{
        type: Sequelize.STRING(255),
        allowNull: false
      },
      contraseña: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      usuario: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      administrador: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

