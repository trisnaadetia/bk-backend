'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Jenis_Pelanggarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pelanggaran: {
        type: Sequelize.STRING
      },
      jenis_pelanggaran: {
        type: Sequelize.STRING
      },
      kode: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Jenis_Pelanggarans');
  }
};