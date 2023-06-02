'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Barang.hasMany(models.Barang_Transaksi_Penjualan, {foreignKey: 'barang_id', onDelete: 'CASCADE', onUpdate: 'CASCADE'}),
      Barang.hasMany(models.Barang_Transaksi_Pembelian, {foreignKey: 'barang_id', onDelete: 'CASCADE', onUpdate: 'CASCADE'}),
      Barang.belongsTo(models.Jenis_Barang, {foreignKey: 'jenis_barang_id', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    }
  }
  Barang.init({
    nama: DataTypes.STRING,
    jumlah_stok: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
    jenis_barang_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Barang',
  });
  return Barang;
};