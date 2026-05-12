'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuizQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QuizQuestion.init({
    question: DataTypes.TEXT,
    options: DataTypes.JSONB,
    correct_answer: DataTypes.STRING,
    explanation: DataTypes.TEXT,
    position: DataTypes.INTEGER,
    quizId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QuizQuestion',
  });
  return QuizQuestion;
};