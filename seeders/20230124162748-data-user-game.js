'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('User_Games', [
        {
        userName: 'khairyel',
        password: 'beauty31',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        userName: 'vernandes',
        password: 'vauili73',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
