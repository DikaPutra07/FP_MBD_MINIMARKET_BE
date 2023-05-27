const barangRepository = require('../repositories/barangRepository');

const getAllBarang = async () => {
    try {
        const data = await barangRepository.getAllBarang();
        return data;
    }
    catch (error) {
        throw error;
    }
}

const getBarangById = async (id) => {
    try {
        const data = await barangRepository.getBarangById(id);
        return data;
    }
    catch (error) {
        throw error;
    }
}

const createBarang = async (data) => {
    try {
        const created = await barangRepository.createBarang(data);
        return created;
    }
    catch (error) {
        throw error;
    }
}

const updateBarang = async (data, id) => {
    try {
        const updated = await barangRepository.updateBarang(data, id);
        return updated;
    }
    catch (error) {
        throw error;
    }
}

const deleteBarang = async (id) => {
    try {
        const deleted = await barangRepository.deleteBarang(id);
        return deleted;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllBarang,
    getBarangById,
    createBarang,
    updateBarang,
    deleteBarang
}