'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('certificates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      verification_id: {
        type: Sequelize.STRING
      },
      issued_at: {
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER ,
          references : {
          model : "Users" , key : "id"
        }
      },
      courseId: {
        type: Sequelize.INTEGER , 
          references :{
          model : "courses" , key : "id"
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
    await queryInterface.dropTable('certificates');
  }
};