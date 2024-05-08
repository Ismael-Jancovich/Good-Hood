'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ordenes', {
      id_orden: {
        type: Sequelize.INTEGREL,
        allowNull: false,
        primaryKey: true
      },
  
      id_usuario: {
        type: Sequelize.INTEGREL,
        references:{
        model: "user",
        key: "id_usuario"
      }
      },
  
      fecha: Sequelize.DATETIME,
  
      total: Sequelize.DECIMAL(10, 2),
  
      onUpdate: "CASCADE",
      onDelete: "SET NULL",

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
    await queryInterface.dropTable('ordenes');
  }
};

