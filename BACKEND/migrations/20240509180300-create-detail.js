'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Detail', {
      id_detalles: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },

      id_products: {
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id_producto"
        }
      },

      id_orden: {
        type: Sequelize.INTEGER,
        references: {
          model: "order",
          key: "id_orden"
        }

      },
      cantidad: Sequelize.INTEGER,
      precio: Sequelize.DECIMAL(10, 2),

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
    await queryInterface.dropTable('Detail');
  }
};