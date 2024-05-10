'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id_orden: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id_usuario"
        },
      },
      fecha: Sequelize.DATE,
      total: Sequelize.DECIMAL(10, 2),
      

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
    await queryInterface.dropTable('orders');
  }
};