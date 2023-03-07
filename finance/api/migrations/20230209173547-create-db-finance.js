'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dbFinances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.DECIMAL
      },
      nome: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      },
      expiracao: {
        type: Sequelize.STRING
      },
      cvv: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dbFinances');
  }
};