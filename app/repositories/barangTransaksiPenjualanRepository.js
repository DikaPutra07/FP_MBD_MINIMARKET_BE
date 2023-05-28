const { BarangTransaksiPenjualan } = require('../models');

const getAllBarangTransaksiPenjualan = async () => {
    return BarangTransaksiPenjualan.findAll();
}

const getBarangTransaksiPenjualanById = async (id) => {
    return BarangTransaksiPenjualan.findOne({
        where: {
            id: id
        }
    });
}

const createBarangTransaksiPenjualan = async (data) => {
    return BarangTransaksiPenjualan.create(data);
}

const updateBarangTransaksiPenjualan = async (data, id) => {
    return BarangTransaksiPenjualan.update(data, {
        where: {
            id: id
        }
    });
}

const deleteBarangTransaksiPenjualan = async (id) => {
    return BarangTransaksiPenjualan.destroy({
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
