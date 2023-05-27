const jenisBarangRepository = require('../repositories/jenisBarangRepository');

const getAllJenisBarang = async () => {
    try {
        const data = await jenisBarangRepository.getAllJenisBarang();
        return data;
    }
    catch (error) {
        throw error;
    }
}

const getJenisBarangById = async (id) => {
    try {
        const data = await jenisBarangRepository.getJenisBarangById(id);
        return data;
    }
    catch (error) {
        throw error;
    }
}

const createJenisBarang = async (data) => {
    try {
        const created = await jenisBarangRepository.createJenisBarang(data);
        return created;
    }
    catch (error) {
        throw error;
    }
}

const updateJenisBarang = async (data, id) => {
    try {
        const updated = await jenisBarangRepository.updateJenisBarang(data, id);
        return updated;
    }
    catch (error) {
        throw error;
    }
}

const deleteJenisBarang = async (id) => {
    try {
        const deleted = await jenisBarangRepository.deleteJenisBarang(id);
        return deleted;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllJenisBarang,
    getJenisBarangById,
    createJenisBarang,
    updateJenisBarang,
    deleteJenisBarang
}