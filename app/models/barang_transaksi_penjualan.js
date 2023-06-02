'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang_Transaksi_Penjualan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Barang_Transaksi_Penjualan.belongsTo(models.Transaksi_Penjualan, {foreignKey: 'transaksi_penjualan_id', onDelete: 'CASCADE', onUpdate: 'CASCADE'}),
      Barang_Transaksi_Penjualan.belongsTo(models.Barang, {foreignKey: 'barang_id', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    }
  }
  Barang_Transaksi_Penjualan.init({
    jumlah_barang: DataTypes.INTEGER,
    transaksi_penjualan_id: DataTypes.INTEGER,
    barang_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Barang_Transaksi_Penjualan',
  });
  return Barang_Transaksi_Penjualan;
};