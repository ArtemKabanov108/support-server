'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('agents', [{
      name: 'Bob',
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('agents', null, {});
  }
};
