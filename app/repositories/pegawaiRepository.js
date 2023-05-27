const { Pegawai } = require('../models');

const getAllPegawai = async () => {
    return Pegawai.findAll();
}

const getPegawaiById = async (id) => {
    return Pegawai.findOne({
        where: {
            id: id
        }
    });
}

const createPegawai = async (data) => {
    return Pegawai.create(data);
}

const updatePegawai = async (data, id) => {
    return Pegawai.update(data, {
        where: {
            id: id
        }
    });
}

const deletePegawai = async (id) => {
    return Pegawai.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllPegawai,
    getPegawaiById,
    createPegawai,
    updatePegawai,
    deletePegawai
}