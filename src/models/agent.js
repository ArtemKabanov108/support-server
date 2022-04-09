const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const { STATUS } = require('./DBEnums');
const agentsModelName = 'agents';
const agentsModelData = {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM,
    defaultValue: 'free',
    values: STATUS,
    allowNull: false,
  },
  deleted_at: {
    type: Sequelize.DATE,
    defaultValue: null,
    allowNull: true,
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
};
const agentsModelOptions = {
  timestamp: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  sequelize,
  indexes: [
    {
      unique: true,
      fields: ['name', 'status'],
    },
  ],
};

const AgentsModel = sequelize.define(
  agentsModelName,
  agentsModelData,
  agentsModelOptions,
);

module.exports = {
  AgentsModel,
  agentsModelName,
  agentsModelData,
  agentsModelOptions,
};
