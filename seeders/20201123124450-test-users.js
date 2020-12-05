'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const now = new Date();
    return queryInterface.bulkInsert('Users', [
      { name: '太郎',  created_at: now, updated_at: now},
      { name: '次郎',  created_at: now, updated_at: now},
      { name: '三郎',  created_at: now, updated_at: now},
      { name: '四郎',  created_at: now, updated_at: now},
      { name: '五郎',  created_at: now, updated_at: now},
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
