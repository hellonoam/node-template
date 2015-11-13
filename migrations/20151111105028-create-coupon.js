'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Coupons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      productId: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      title: {
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
      instructions: {
        type: Sequelize.TEXT
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
    }).then(function () {
      return queryInterface.sequelize.query('ALTER SEQUENCE "Coupons_id_seq" RESTART WITH 2000000001;')
    })
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Coupons');
  }
};
