'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Payments', [
      {
        valor: 10,
        nome: 'cartão de teste',
        numeroCartao: '5531109463210225',
        expiracaoCartao: '2023-08',
        cvvCartao: 396,
        status: 'CRIADO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        valor: 90,
        nome: 'cartão de teste',
        numeroCartao: 5531109463210225,
        expiracaoCartao: '2023-08',
        cvvCartao: 396,
        status: 'CRIADO',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Payments', null, {});
  },
};
