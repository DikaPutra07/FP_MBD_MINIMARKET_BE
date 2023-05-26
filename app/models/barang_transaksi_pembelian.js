'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang_Transaksi_Pembelian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Barang_Transaksi_Pembelian.belongsTo(models.Transaksi_Pembelian, {foreignKey: 'transaksi_pembelian_id'}),
      Barang_Transaksi_Pembelian.belongsTo(models.Barang, {foreignKey: 'barang_id'});
    }
  }
  Barang_Transaksi_Pembelian.init({
    jumlah_barang: DataTypes.INTEGER,
    transaksi_pembelian_id: DataTypes.INTEGER,
    barang_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Barang_Transaksi_Pembelian',
  });
  return Barang_Transaksi_Pembelian;
};