'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jenis_Pelanggaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Jenis_Pelanggaran.init({
    pelanggaran: DataTypes.STRING,
    jenis_pelanggaran: DataTypes.STRING,
    kode: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jenis_Pelanggaran',
  });
  return Jenis_Pelanggaran;
};