'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Payments', 'invoiceId', {
        type: Sequelize.INTEGER,
        references: { model: 'Invoices', key: 'id' }
      })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Payments', 'invoiceId');
  }
};