'use strict';

const {
  agentsModelName,
  agentsModelData,
  agentsModelOptions,
} = require('../models/agent');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.sequelize
        .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
        .then(() => queryInterface.createTable(
          agentsModelName,
          agentsModelData,
          agentsModelOptions,
        )),
    ]).catch((err) => {
      console.log('add Agents table err: ======>>>>>>>> ', err);
      throw err;
    });
  },

  down: async (queryInterface) => Promise.all([
    queryInterface.dropTable(agentsModelOptions),
  ]).catch((err) => {
    console.log('add Agents table err: ======>>>>>>>> ', err);
    throw err;
  }),
};