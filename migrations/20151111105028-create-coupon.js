'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Coupons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      couponCode: {
        type: Sequelize.STRING
      },
      couponWebUrl: {
        type: Sequelize.STRING
      },
      couponIosUrl: {
        type: Sequelize.STRING
      },
      couponAndroidUrl: {
        type: Sequelize.STRING
      },
      clickCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
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
      return queryInterface.addIndex('Coupons', ['slug'], { indicesType: 'UNIQUE' })
    })
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Coupons');
  }
};
