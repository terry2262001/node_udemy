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
     await queryInterface.bulkInsert('User',
     [
      {
       email: 'truongtho@gmail.com',
       password: '123',
       username: 'fake',
      },
      {
        email: 'truongtho2@gmail.com',
        password: '123',
        username: 'fake2',
       },
       {
        email: 'truongtho3@gmail.com',
        password: '123',
        username: 'fake3',
       },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
