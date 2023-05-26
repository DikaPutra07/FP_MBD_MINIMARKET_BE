'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaksi_Penjualan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaksi_Penjualan.belongsTo(models.Member, {foreignKey: 'member_id'}),
      Transaksi_Penjualan.hasMany(models.Barang_Transaksi_Penjualan, {foreignKey: 'transaksi_penjualan_id'}),
      Transaksi_Penjualan.belongsTo(models.Pegawai, {foreignKey: 'pegawai_id'});
    }
  }
  Transaksi_Penjualan.init({
    timestamp: DataTypes.DATE,
    total_transaksi_penjualan: DataTypes.INTEGER,
    member_id: DataTypes.INTEGER,
    pegawai_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaksi_Penjualan',
  });
  return Transaksi_Penjualan;
};