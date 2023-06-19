'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('materiel', {
      Numero: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      design: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      etat: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qte: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('materiel')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
