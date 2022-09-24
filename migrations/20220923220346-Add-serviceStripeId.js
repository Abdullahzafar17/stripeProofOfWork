"use strict";
const { TABLES } = require("../utils/constants");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(TABLES.SERVICE_PLANS, "serviceId", {
      type: Sequelize.STRING,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(TABLES.SERVICE_PLANS, "serviceId");
  },
};
