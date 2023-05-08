'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('pessoas', [
        { nome: 'John Doe', sobrenome: 'De Sá', idade:22}, 
        { nome: 'John Doe', sobrenome: 'De Sá', idade:22},
        { nome: 'John Doe', sobrenome: 'De Sá', idade:22},
        { nome: 'John Doe', sobrenome: 'De Sá', idade:22},
        { nome: 'John Doe', sobrenome: 'De Sá', idade:22}
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('pessoas', null, {});
     
  }
};
