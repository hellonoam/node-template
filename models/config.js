'use strict';
module.exports = function(sequelize, DataTypes) {
  var Config = sequelize.define('Config', {
    key: DataTypes.STRING,
    value: DataTypes.JSON
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Config;
};