'use strict';
module.exports = function(sequelize, DataTypes) {
  var Categorization = sequelize.define('Categorization', {
    productId: DataTypes.INTEGER,
    categoryeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Categorization;
};