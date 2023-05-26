'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bidang_Kerja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bidang_Kerja.hasMany(models.Pegawai, {foreignKey: 'bidang_kerja_id'});
    }
  }
  Bidang_Kerja.init({
    pekerjaan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bidang_Kerja',
  });
  return Bidang_Kerja;
};