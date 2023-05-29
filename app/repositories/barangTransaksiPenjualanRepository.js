const { Barang_Transaksi_Penjualan } = require('../models');

const getAllBarangTransaksiPenjualan = async () => {
    return Barang_Transaksi_Penjualan.findAll();
}

const getBarangTransaksiPenjualanById = async (id) => {
    return Barang_Transaksi_Penjualan.findOne({
        where: {
            id: id
        }
    });
}

const createBarangTransaksiPenjualan = async (data) => {
    return Barang_Transaksi_Penjualan.create(data);
}

const updateBarangTransaksiPenjualan = async (data, id) => {
    return Barang_Transaksi_Penjualan.update(data, {
        where: {
            id: id
        }
    });
}

const deleteBarangTransaksiPenjualan = async (id) => {
    return Barang_Transaksi_Penjualan.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllBarangTransaksiPenjualan,
    getBarangTransaksiPenjualanById,
    createBarangTransaksiPenjualan,
    updateBarangTransaksiPenjualan,
    deleteBarangTransaksiPenjualan
}
