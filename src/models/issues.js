const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const { ISSUE_STATUS } = require('./DBEnums');
const issuesModelName = 'issues';
const issuesModelData = {
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
    defaultValue: 'pending',
    values: ISSUE_STATUS,
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
const issuesModelOptions = {
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

const IssuesModel = sequelize.define(
  issuesModelName,
  issuesModelData,
  issuesModelOptions,
);

module.exports = {
  IssuesModel,
  issuesModelName,
  issuesModelData,
  issuesModelOptions,
};
