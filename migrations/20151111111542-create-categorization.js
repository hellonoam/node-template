'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Categorizations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      itemId: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      itemType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      position: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1
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
      return queryInterface.addIndex(
        'Categorizations',
        ['itemId', 'itemType', 'categoryId'],
        { indicesType: 'UNIQUE' }
      )
    })
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Categorizations')
  }
};
