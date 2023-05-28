const barangTransaksiPembelianRepository = require('../repositories/barangTransaksiPembelianRepository');

const getAllBarangTransaksiPembelian = async () => {
    try {
        const data = await barangTransaksiPembelianRepository.getAllBarangTransaksiPembelian();
        return data;
    }
    catch (error) {
        throw error;
    }
}

const getBarangTransaksiPembelianById = async (id) => {
    try {
        const data = await barangTransaksiPembelianRepository.getBarangTransaksiPembelianById(id);
        return data;
    }
    catch (error) {
        throw error;
    }
}

const createBarangTransaksiPembelian = async (data) => {
    try {
        const created = await barangTransaksiPembelianRepository.createBarangTransaksiPembelian(data);
        return created;
    }
    catch (error) {
        throw error;
    }
}

const updateBarangTransaksiPembelian = async (data, id) => {
    try {
        const updated = await barangTransaksiPembelianRepository.updateBarangTransaksiPembelian(data, id);
        return updated;
    }
    catch (error) {
        throw error;
    }
}

const deleteBarangTransaksiPembelian = async (id) => {
    try {
        const deleted = await barangTransaksiPembelianRepository.deleteBarangTransaksiPembelian(id);
        return deleted;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllBarangTransaksiPembelian,
    getBarangTransaksiPembelianById,
    createBarangTransaksiPembelian,
    updateBarangTransaksiPembelian,
    deleteBarangTransaksiPembelian
}

