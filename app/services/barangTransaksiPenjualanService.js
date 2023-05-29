const barangTransaksiPenjualanRepository = require('../repositories/barangTransaksiPenjualanRepository');

const getAllBarangTransaksiPenjualan = async () => {
    try {
        const data = await barangTransaksiPenjualanRepository.getAllBarangTransaksiPenjualan();
        return data;
    }
    catch (error) {
        throw error;
    }
}

const getBarangTransaksiPenjualanById = async (id) => {
    try {
        const data = await barangTransaksiPenjualanRepository.getBarangTransaksiPenjualanById(id);
        return data;
    }
    catch (error) {
        throw error;
    }
}

const createBarangTransaksiPenjualan = async (data) => {
    try {
        const created = await barangTransaksiPenjualanRepository.createBarangTransaksiPenjualan(data);
        return created;
    }
    catch (error) {
        throw error;
    }
}

const updateBarangTransaksiPenjualan = async (data, id) => {
    try {
        const updated = await barangTransaksiPenjualanRepository.updateBarangTransaksiPenjualan(data, id);
        return updated;
    }
    catch (error) {
        throw error;
    }
}

const deleteBarangTransaksiPenjualan = async (id) => {
    try {
        const deleted = await barangTransaksiPenjualanRepository.deleteBarangTransaksiPenjualan(id);
        return deleted;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllBarangTransaksiPenjualan,
    getBarangTransaksiPenjualanById,
    createBarangTransaksiPenjualan,
    updateBarangTransaksiPenjualan,
    deleteBarangTransaksiPenjualan
}