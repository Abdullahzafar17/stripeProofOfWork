'use strict';
const { TABLES } = require('../utils/constants')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLES.CUSTOMERS, {
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
        type: Sequelize.ENUM("0","1"),
      defaultValue: "1"
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
    await queryInterface.dropTable(TABLES.CUSTOMERS);
  }
};