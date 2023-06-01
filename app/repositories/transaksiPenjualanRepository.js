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

const getTransaksiPenjualanByPegawaiId = async (pegawai_id) => {
    return Transaksi_Penjualan.findAll({
        where: {
            pegawai_id: pegawai_id
        }
    });
}

const getTransaksiPenjualanByMemberId = async (member_id) => {
    return Transaksi_Penjualan.findAll({
        where: {
            member_id: member_id
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
    getTransaksiPenjualanByPegawaiId,
    getTransaksiPenjualanByMemberId,
    createTransaksiPenjualan,
    updateTransaksiPenjualan,
    deleteTransaksiPenjualan
}