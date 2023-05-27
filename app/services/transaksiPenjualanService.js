const transaksiPenjualanRepository = require('../repositories/transaksiPenjualanRepository');

const getAllTransaksiPenjualan = async () => {
    try {
        const transaksiPenjualan = await transaksiPenjualanRepository.getAllTransaksiPenjualan();
        return transaksiPenjualan;
    }
    catch (error) {
        throw error;
    }
}

const getTransaksiPenjualanById = async (id) => {
    try {
        const transaksiPenjualan = await transaksiPenjualanRepository.getTransaksiPenjualanById(id);
        return transaksiPenjualan;
    }
    catch (error) {
        throw error;
    }
}

const createTransaksiPenjualan = async (data) => {
    try {
        const transaksiPenjualan = await transaksiPenjualanRepository.createTransaksiPenjualan(data);
        return transaksiPenjualan;
    }
    catch (error) {
        throw error;
    }
}

const updateTransaksiPenjualan = async (data, id) => {
    try {
        const transaksiPenjualan = await transaksiPenjualanRepository.updateTransaksiPenjualan(data, id);
        return transaksiPenjualan;
    }
    catch (error) {
        throw error;
    }
}

const deleteTransaksiPenjualan = async (id) => {
    try {
        const transaksiPenjualan = await transaksiPenjualanRepository.deleteTransaksiPenjualan(id);
        return transaksiPenjualan;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllTransaksiPenjualan,
    getTransaksiPenjualanById,
    createTransaksiPenjualan,
    updateTransaksiPenjualan,
    deleteTransaksiPenjualan
}