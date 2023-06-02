'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pegawai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pegawai.belongsTo(models.Bidang_Kerja, {foreignKey: 'bidang_kerja_id', onDelete: 'CASCADE', onUpdate: 'CASCADE'}),
      Pegawai.hasMany(models.Transaksi_Penjualan, {foreignKey: 'pegawai_id', onDelete: 'CASCADE', onUpdate: 'CASCADE'}),
      Pegawai.hasMany(models.Transaksi_Pembelian, {foreignKey: 'pegawai_id', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    }
  }
  Pegawai.init({
    nama: DataTypes.STRING,
    bidang_kerja_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pegawai',
  });
  return Pegawai;
};