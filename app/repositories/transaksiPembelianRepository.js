const { Transaksi_Pembelian } = require('../models');

const getAllTransaksiPembelian = async () => {
    return Transaksi_Pembelian.findAll();
}

const getTransaksiPembelianById = async (id) => {
    return Transaksi_Pembelian.findOne({
        where: {
            id: id
        }
    });
}

const createTransaksiPembelian = async (data) => {
    return Transaksi_Pembelian.create(data);
}

const updateTransaksiPembelian = async (data, id) => {
    return Transaksi_Pembelian.update(data, {
        where: {
            id: id
        }
    });
}

const deleteTransaksiPembelian = async (id) => {
    return Transaksi_Pembelian.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllTransaksiPembelian,
    getTransaksiPembelianById,
    createTransaksiPembelian,
    updateTransaksiPembelian,
    deleteTransaksiPembelian
}