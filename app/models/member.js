'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Member.hasMany(models.Transaksi_Penjualan, {foreignKey: 'member_id', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    }
  }
  Member.init({
    nama: DataTypes.STRING,
    no_telepon: DataTypes.STRING,
    poin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};