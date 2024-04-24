'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detalles', {
      id_detalles: {
        type: Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true
        },
        id_producto: {
        type: Sequelize.INTEGER,
        references: {
          model: "productos",
          key: "id_producto"
        }
        },
        id_orden: {
          type: Sequelize.INTEGER,
          references: {
            model: "ordenes",
            key: "id_orden"
          },

          onUpdate: "CASCADE",
          onDelete: "SET NULL",

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
    await queryInterface.dropTable('detalles');
  }
};