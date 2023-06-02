'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Supplier.hasMany(models.Transaksi_Pembelian, {foreignKey: 'supplier_id', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    }
  }
  Supplier.init({
    nama: DataTypes.STRING,
    no_telepon: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Supplier',
  });
  return Supplier;
};