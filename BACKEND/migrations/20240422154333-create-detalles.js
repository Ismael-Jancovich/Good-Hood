'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detalles', {

      id_detalles: {
        type: Sequelize.INTEGREL,
        allowNull: false,
        primaryKey: true
      },

      id_prodcuto: {
        type: Sequelize.INTEGREL,
        references: {
          model: "producto",
          key: "id_producto"
        }
      },

      id_orden: {
        type: Sequelize.INTEGREL,
        references: {
          model: "orden",
          key: "id_orden"
        }

      },

      cantidad: Sequelize.INTEGREL,
      precio: Sequelize.DECIMAL(10, 2),

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
    await queryInterface.dropTable('detalles');
  }
};