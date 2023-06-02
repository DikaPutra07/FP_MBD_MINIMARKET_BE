'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jenis_Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Jenis_Barang.hasMany(models.Barang, {foreignKey: 'jenis_barang_id', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    }
  }
  Jenis_Barang.init({
    kategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Jenis_Barang',
  });
  return Jenis_Barang;
};