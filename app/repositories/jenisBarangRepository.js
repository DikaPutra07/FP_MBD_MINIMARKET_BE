const { Jenis_Barang } = require('../models');

const getAllJenisBarang = async () => {
    return Jenis_Barang.findAll();
}

const getJenisBarangById = async (id) => {
    return Jenis_Barang.findOne({
        where: {
            id: id
        }
    });
}

const createJenisBarang = async (data) => {
    return Jenis_Barang.create(data);
}

const updateJenisBarang = async (data, id) => {
    return Jenis_Barang.update(data, {
        where: {
            id: id
        }
    });
}

const deleteJenisBarang = async (id) => {
    return Jenis_Barang.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllJenisBarang,
    getJenisBarangById,
    createJenisBarang,
    updateJenisBarang,
    deleteJenisBarang
}