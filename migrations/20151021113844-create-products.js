module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      picture: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      data: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function () {
      return queryInterface.addIndex('Products', ['slug'], { indicesType: 'UNIQUE' })
    }).then(function () {
      return queryInterface.sequelize.query('ALTER SEQUENCE "Products_id_seq" RESTART WITH 1000000001;')
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Products')
  }
}
