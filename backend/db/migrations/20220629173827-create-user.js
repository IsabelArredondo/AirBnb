"use strict";

const { DATE } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // username: {
      //   type: Sequelize.STRING(30),
      //   allowNull: false,
      //   unique: true
      // },
      // birthday: {
      //  type: Sequelize.DATE
      // },
      // profilePicture: {
      //   type: Sequelize.STRING(256),
      //   allowNull: false
      // },
      // aboutMe: {
      //   type: Sequelize.STRING(256),
      //   allowNull: false,
      // },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  }
};