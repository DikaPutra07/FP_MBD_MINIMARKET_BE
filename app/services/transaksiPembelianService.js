const transaksiPembelianRepository = require('../repositories/transaksiPembelianRepository');

const getAllTransaksiPembelian = async () => {
    try {
        const transaksiPembelian = await transaksiPembelianRepository.getAllTransaksiPembelian();
        return transaksiPembelian;
    }
    catch (error) {
        throw error;
    }
}

const getTransaksiPembelianById = async (id) => {
    try {
        const transaksiPembelian = await transaksiPembelianRepository.getTransaksiPembelianById(id);
        return transaksiPembelian;
    }
    catch (error) {
        throw error;
    }
}

const getTransaksiPembelianByPegawaiId = async (pegawai_id) => {
    try {
        const transaksiPembelian = await transaksiPembelianRepository.getTransaksiPembelianByPegawaiId(pegawai_id);
        return transaksiPembelian;
    }
    catch (error) {
        throw error;
    }
}

const getTransaksiPembelianBySupplierId = async (supplier_id) => {
    try {
        const transaksiPembelian = await transaksiPembelianRepository.getTransaksiPembelianBySupplierId(supplier_id);
        return transaksiPembelian;
    }
    catch (error) {
        throw error;
    }
}

const createTransaksiPembelian = async (data) => {
    try {
        const transaksiPembelian = await transaksiPembelianRepository.createTransaksiPembelian(data);
        return transaksiPembelian;
    }
    catch (error) {
        throw error;
    }
}

const updateTransaksiPembelian = async (data, id) => {
    try {
        const transaksiPembelian = await transaksiPembelianRepository.updateTransaksiPembelian(data, id);
        return transaksiPembelian;
    }
    catch (error) {
        throw error;
    }
}

const deleteTransaksiPembelian = async (id) => {
    try {
        const transaksiPembelian = await transaksiPembelianRepository.deleteTransaksiPembelian(id);
        return transaksiPembelian;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllTransaksiPembelian,
    getTransaksiPembelianById,
    getTransaksiPembelianByPegawaiId,
    getTransaksiPembelianBySupplierId,
    createTransaksiPembelian,
    updateTransaksiPembelian,
    deleteTransaksiPembelian
}