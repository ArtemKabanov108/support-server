'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('agents', [{
      name: 'Marla',
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('agents', null, {});
  }
};
