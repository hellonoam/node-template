'use strict'
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      roles: {
        default: true
      }
    },
    slug: {
      type: DataTypes.STRING,
      roles: {
        default: true
      }
    },
    data: {
      type: DataTypes.JSON,
      roles: {
        admin: true
      }
    },
    createdAt: { type: DataTypes.DATE, roles: { admin: true } },
    updatedAt: { type: DataTypes.DATE, roles: { admin: true } }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  })
  return Category
}
