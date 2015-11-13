'use strict'
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    data: DataTypes.JSON,
  }, {
    classMethods: {
      associate: function(models) {
        Category.belongsToMany(models.Coupon, {
          as: 'coupons',
          through: { model: models.Categorization, scope: { itemType: models.Coupon.name }, unique: true },
          foreignKey: 'categoryId'
        })
        Category.belongsToMany(models.Product, {
          as: 'products',
          through: { model: models.Categorization, scope: { itemType: models.Product.name }, unique: true },
          foreignKey: 'categoryId'
        })
      }
    }
  })
  return Category
}
