'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaksi_Pembelian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaksi_Pembelian.belongsTo(models.Supplier, {foreignKey: 'supplier_id'}),
      Transaksi_Pembelian.belongsTo(models.Pegawai, {foreignKey: 'pegawai_id'}),
      Transaksi_Pembelian.hasMany(models.Barang_Transaksi_Pembelian, {foreignKey: 'transaksi_pembelian_id'});
    }
  }
  Transaksi_Pembelian.init({
    timestamp: DataTypes.DATE,
    total_transaksi_pembelian: DataTypes.INTEGER,
    supplier_id: DataTypes.INTEGER,
    pegawai_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaksi_Pembelian',
  });
  return Transaksi_Pembelian;
};