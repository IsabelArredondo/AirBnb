'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Images', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reviewId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Reviews',

        },
        onDelete: 'CASCADE',


      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          
        },
        onDelete: 'CASCADE',


      },
      spotId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Spots',
          
        },
        onDelete: 'CASCADE',

      },
      // imageableId and imageableType are not 
      // needed bc they are doing the same thing 
      // as reviewId and spotId  

      imageableId: {
        type: Sequelize.INTEGER,
      },
      imageableType: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING,

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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Images');
  }
};