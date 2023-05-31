'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('dbFinances', [
      {
				valor: 234,
        nome: 'Marcio Brasil',
        numero: 1111,
        expiracao: '2030-05',
        cvv: 634,
        status: 'CONFIRMADO',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
        valor: 3333,
        nome: 'Thiago Chile',
        numero: 2222,
        expiracao: '2040-05',
        cvv: 321,
        status: 'CONFIRMADO',
				createdAt: new Date(),
				updatedAt: new Date()
			}
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
