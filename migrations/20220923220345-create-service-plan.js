'use strict';
const { TABLES } = require('../utils/constants')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLES.SERVICE_PLANS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      interval: {
        type: Sequelize.ENUM('week','month','year'),
        defaultValue: "month"
      },
      intervalCunt: {
        type: Sequelize.INTEGER
      },
      currency: {
        type: Sequelize.DOUBLE
      },
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
    await queryInterface.dropTable(TABLES.SERVICE_PLANS);
  }
};