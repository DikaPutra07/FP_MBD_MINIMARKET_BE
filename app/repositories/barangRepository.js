const { Barang } = require('../models');

const getAllBarang = async () => {
    return Barang.findAll();
}

const getBarangById = async (id) => {
    return Barang.findOne({
        where: {
            id: id
        }
    });
}

const createBarang = async (data) => {
    return Barang.create(data);
}

const updateBarang = async (data, id) => {
    return Barang.update(data, {
        where: {
            id: id
        }
    });
}

const deleteBarang = async (id) => {
    return Barang.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllBarang,
    getBarangById,
    createBarang,
    updateBarang,
    deleteBarang
}