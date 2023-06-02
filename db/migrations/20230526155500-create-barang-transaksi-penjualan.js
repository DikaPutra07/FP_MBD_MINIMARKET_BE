'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Barang_Transaksi_Penjualans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jumlah_barang: {
        type: Sequelize.INTEGER
      },
      transaksi_penjualan_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Transaksi_Penjualans',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      barang_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Barangs',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Barang_Transaksi_Penjualans');
  }
};