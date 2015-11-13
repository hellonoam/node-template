'use strict'
module.exports = function(sequelize, DataTypes) {
  var Coupon = sequelize.define('Coupon', {
    productId: DataTypes.BIGINT,
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    picture: DataTypes.STRING,
    description: DataTypes.TEXT,
    instructions: DataTypes.TEXT,
    couponCode: DataTypes.STRING,
    couponWebUrl: DataTypes.STRING,
    couponIosUrl: DataTypes.STRING,
    couponAndroidUrl: DataTypes.STRING,
    clickCount: DataTypes.INTEGER,
    data: DataTypes.JSON,
  }, {
    classMethods: {
      associate: function(models) {
        Coupon.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' })
        Coupon.belongsToMany(models.Category, {
          as: 'categories',
          through: { model: models.Categorization, scope: { itemType: Coupon.name }, unique: true },
          foreignKey: 'itemId'
        })
      }
    }
  })
  return Coupon
}
