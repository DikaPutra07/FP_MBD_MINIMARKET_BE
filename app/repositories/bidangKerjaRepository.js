const {Bidang_Kerja} = require('../models')

const getAllBidangKerja = async () => {
    return Bidang_Kerja.findAll();
}

const getBidangKerjaById = async (id) => {
    return Bidang_Kerja.findOne({
        where: {
            id: id
        }
    });
}

const createBidangKerja = async (data) => {
    return Bidang_Kerja.create(data);
}

const updateBidangKerja = async (data, id) => {
    return Bidang_Kerja.update(data, {
        where: {
            id: id
        }
    });
}

const deleteBidangKerja = async (id) => {
    return Bidang_Kerja.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllBidangKerja,
    getBidangKerjaById,
    createBidangKerja,
    updateBidangKerja,
    deleteBidangKerja
}