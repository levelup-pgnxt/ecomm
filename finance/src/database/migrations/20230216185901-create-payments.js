'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Payments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      value: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      cardName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'card_name',
      },
      cardNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'card_number',
      },
      expirationDate: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'expiration_date',
      },
      cvv: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'CRIADO',
        allowNull: false
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Payments');
  },
};