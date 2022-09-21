'use strict';
const { TABLES } = require('../utils/constants')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLES.PROVIDERS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stripeId: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM,
        values: [
          "0",
          "1",
      ],
      defaultValue: "0"
      },
      stripeOnboarded: {
        type: Sequelize.ENUM,
        values: [
          "0",
          "1",
      ],
      defaultValue: "0"
      },
      applicationAuthorized: {
        type: Sequelize.ENUM,
        values: [
          "0",
          "1",
      ],
      defaultValue: "0"
      },
      identityVerified: { 
        type: Sequelize.ENUM,
        values: [
          "0",
          "1",
      ],
      defaultValue: "0"
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
    await queryInterface.dropTable(TABLES.PROVIDERS);
  }
};