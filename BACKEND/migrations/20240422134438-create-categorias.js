'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categorias', {
      id_categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nombre: Sequelize.STRING(100),

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
    await queryInterface.dropTable('categorias');
  }
};