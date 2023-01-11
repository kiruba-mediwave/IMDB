'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable("movies", {

      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genre: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      yearOfRelease: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdByUser: {
        type: Sequelize.UUID,
        references: {
        model: "users",
        key: "id",
      },
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
    /**
     * Add reverting commands here.
     *
     * Example:
     * 
     */
  }
};
