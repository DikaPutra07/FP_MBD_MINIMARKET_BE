const { Transaksi_Penjualan } = require('../models');

const getAllTransaksiPenjualan = async () => {
    return Transaksi_Penjualan.findAll();
}

const getTransaksiPenjualanById = async (id) => {
    return Transaksi_Penjualan.findOne({
        where: {
            id: id
        }
    });
}

const createTransaksiPenjualan = async (data) => {
    return Transaksi_Penjualan.create(data);
}

const updateTransaksiPenjualan = async (data, id) => {
    return Transaksi_Penjualan.update(data, {
        where: {
            id: id
        }
    });
}

const deleteTransaksiPenjualan = async (id) => {
    return Transaksi_Penjualan.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllTransaksiPenjualan,
    getTransaksiPenjualanById,
    createTransaksiPenjualan,
    updateTransaksiPenjualan,
    deleteTransaksiPenjualan
}