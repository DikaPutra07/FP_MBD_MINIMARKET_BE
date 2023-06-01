const { Barang_Transaksi_Pembelian } = require('../models');

const getAllBarangTransaksiPembelian = async () => {
    return Barang_Transaksi_Pembelian.findAll();
}

const getBarangTransaksiPembelianById = async (id) => {
    return Barang_Transaksi_Pembelian.findOne({
        where: {
            id: id
        }
    });
}

const getBarangTransaksiPembelianByTransaksiPembelianId = async (transaksi_pembelian_id) => {
    return Barang_Transaksi_Pembelian.findAll({
        where: {
            transaksi_pembelian_id: transaksi_pembelian_id
        }
    });
}

const createBarangTransaksiPembelian = async (data) => {
    return Barang_Transaksi_Pembelian.create(data);
}

const updateBarangTransaksiPembelian = async (data, id) => {
    return Barang_Transaksi_Pembelian.update(data, {
        where: {
            id: id
        }
    });
}

const deleteBarangTransaksiPembelian = async (id) => {
    return Barang_Transaksi_Pembelian.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllBarangTransaksiPembelian,
    getBarangTransaksiPembelianById,
    getBarangTransaksiPembelianByTransaksiPembelianId,
    createBarangTransaksiPembelian,
    updateBarangTransaksiPembelian,
    deleteBarangTransaksiPembelian
}
