'use strict';
const {
  Model
} = require('sequelize');
const { MODELS} = require('../utils/constants')
module.exports = (sequelize, DataTypes) => {
  class servicePlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  servicePlan.init({
    name: DataTypes.STRING,
    serviceId: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    interval: DataTypes.ENUM('week','month','year'),
    intervalCunt: DataTypes.INTEGER,
    currency: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: MODELS.SERVICE_PLAN,
  });
  return servicePlan;
};