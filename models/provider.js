'use strict';
const {
  Model
} = require('sequelize');
const {MODELS} = require('../utils/constants')
module.exports = (sequelize, DataTypes) => {
  class provider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  provider.init({
    stripeId: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.ENUM("0","1"),
    stripeOnboarded: DataTypes.ENUM("0","1"),
    applicationAuthorized: DataTypes.ENUM("0","1"),
    identityVerified: DataTypes.ENUM("0","1")
  }, {
    sequelize,
    modelName: MODELS.PROVIDER,
  });
  return provider;
};