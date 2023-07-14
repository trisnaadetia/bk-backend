'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'name must be required'
        }
      }
    },
    class: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'class must be required'
        }
      }
    },
    jenis_pelanggaran: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'jenis pelanggaran must be required'
        }
      }
    },
    total_score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};