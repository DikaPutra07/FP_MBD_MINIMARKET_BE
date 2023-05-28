const { BarangTransaksiPembelian } = require('../models');

const getAllBarangTransaksiPembelian = async () => {
    return BarangTransaksiPembelian.findAll();
}

const getBarangTransaksiPembelianById = async (id) => {
    return BarangTransaksiPembelian.findOne({
        where: {
            id: id
        }
    });
}

const createBarangTransaksiPembelian = async (data) => {
    return BarangTransaksiPembelian.create(data);
}

const updateBarangTransaksiPembelian = async (data, id) => {
    return BarangTransaksiPembelian.update(data, {
        where: {
            id: id
        }
    });
}

const deleteBarangTransaksiPembelian = async (id) => {
    return BarangTransaksiPembelian.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllBarangTransaksiPembelian,
    getBarangTransaksiPembelianById,
    createBarangTransaksiPembelian,
    updateBarangTransaksiPembelian,
    deleteBarangTransaksiPembelian
}
