'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'contraseña', {
      type: Sequelize.STRING(255)
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'contraseña', {
      type: Sequelize.STRING(50)
    });
  }
};
