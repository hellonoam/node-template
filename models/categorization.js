'use strict'
module.exports = function(sequelize, DataTypes) {
  var Categorization = sequelize.define('Categorization', {
    categoryId: DataTypes.BIGINT,
    itemId: DataTypes.BIGINT,
    itemType: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  })
  return Categorization
}
