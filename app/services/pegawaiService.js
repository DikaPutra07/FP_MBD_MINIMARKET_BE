const pegawaiRepository = require('../repositories/pegawaiRepository');

const getAllPegawai = async () => {
    try {
        const pegawai = await pegawaiRepository.getAllPegawai();
        return pegawai;
    }
    catch (error) {
        throw error;
    }
}

const getPegawaiById = async (id) => {
    try {
        const pegawai = await pegawaiRepository.getPegawaiById(id);
        return pegawai;
    }
    catch (error) {
        throw error;
    }
}

const createPegawai = async (data) => {
    try {
        const pegawai = await pegawaiRepository.createPegawai(data);
        return pegawai;
    }
    catch (error) {
        throw error;
    }
}

const updatePegawai = async (data, id) => {
    try {
        const pegawai = await pegawaiRepository.updatePegawai(data, id);
        return pegawai;
    }
    catch (error) {
        throw error;
    }
}

const deletePegawai = async (id) => {
    try {
        const pegawai = await pegawaiRepository.deletePegawai(id);
        return pegawai;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllPegawai,
    getPegawaiById,
    createPegawai,
    updatePegawai,
    deletePegawai
}