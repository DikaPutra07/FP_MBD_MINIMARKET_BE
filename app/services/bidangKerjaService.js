const bidangKerjaRepository = require('../repositories/bidangKerjaRepository');

const getAllBidangKerja = async () => {
    try {
        const data = await bidangKerjaRepository.getAllBidangKerja();
        return data;
    }
    catch (error) {
        throw error;
    }
}

const getBidangKerjaById = async (id) => {
    try {
        const data = await bidangKerjaRepository.getBidangKerjaById(id);
        return data;
    }
    catch (error) {
        throw error;
    }
}

const createBidangKerja = async (data) => {
    try {
        const created = await bidangKerjaRepository.createBidangKerja(data);
        return created;
    }
    catch (error) {
        throw error;
    }
}

const updateBidangKerja = async (data, id) => {
    try {
        const updated = await bidangKerjaRepository.updateBidangKerja(data, id);
        return updated;
    }
    catch (error) {
        throw error;
    }
}

const deleteBidangKerja = async (id) => {
    try {
        const deleted = await bidangKerjaRepository.deleteBidangKerja(id);
        return deleted;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllBidangKerja,
    getBidangKerjaById,
    createBidangKerja,
    updateBidangKerja,
    deleteBidangKerja
}

