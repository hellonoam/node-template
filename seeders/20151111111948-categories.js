'use strict';

var _ = require('lodash')

module.exports = {
  up: function (queryInterface, Sequelize) {
    var categories = [
      { name: 'Transportation' },
      { name: 'Food' },
      { name: 'Travel' },
    ]

    categories.forEach(function (c) {
      Object.assign(c, {
        slug: _.kebabCase(c.name),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    })

    return queryInterface.bulkInsert('Categories', categories, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
