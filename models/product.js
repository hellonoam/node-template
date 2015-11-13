export default function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    picture: DataTypes.STRING,
    description: DataTypes.TEXT,
    data: DataTypes.JSON,
  }, {
    classMethods: {
      associate: function(models) {
        Product.hasMany(models.Coupon, {foreignKey: 'productId'})
        Product.belongsToMany(models.Category, {
          as: 'categories',
          through: { model: models.Categorization, scope: { itemType: Product.name }, unique: true },
          foreignKey: 'itemId'
        })
      }
    }
  })
  return Product
}
