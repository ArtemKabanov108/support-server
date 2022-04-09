'use strict';

const {
  issuesModelName,
  issuesModelData,
  issuesModelOptions,
} = require('../models/issues');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.sequelize
        .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
        .then(() => queryInterface.createTable(
          issuesModelName,
          issuesModelData,
          issuesModelOptions,
        )),
    ]).catch((err) => {
      console.log('add Issue table err: ======>>>>>>>> ', err);
      throw err;
    });
  },

  down: async (queryInterface) => Promise.all([
    queryInterface.dropTable(issuesModelOptions),
  ]).catch((err) => {
    console.log('add Issue table err: ======>>>>>>>> ', err);
    throw err;
  }),
};