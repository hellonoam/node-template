'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Configs', [{
      key: 'coupons.featured',
      value: '[1, 2, 3]'
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Configs', null, {});
  }
};
