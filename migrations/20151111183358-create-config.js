'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Configs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      key: {
        type: Sequelize.STRING,
        allowNull: false
      },
      value: {
        type: Sequelize.JSON
      }
    }).then(function () {
      return queryInterface.addIndex('Configs', ['key'], { indicesType: 'UNIQUE' })
    })
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Configs');
  }
};
