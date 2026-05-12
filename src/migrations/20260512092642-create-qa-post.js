'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('QaPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      body: {
        type: Sequelize.TEXT
      },
      is_answered: {
        type: Sequelize.BOOLEAN ,
        defaultValue : false
      },
      lessonId: {
        type: Sequelize.INTEGER , 
        references : {
          model : "lessons" , key : "id"
        }
      },
      userId: {
        type: Sequelize.INTEGER , 
        references : {
          model : "Users" , key : "id"
        }
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
    await queryInterface.dropTable('QaPosts');
  }
};