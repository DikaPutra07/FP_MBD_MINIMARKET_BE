const {BidangKerja} = require('../models')

const getAllBidangKerja = async () => {
    return BidangKerja.findAll();
}

const getBidangKerjaById = async (id) => {
    return BidangKerja.findOne({
        where: {
            id: id
        }
    });
}

const createBidangKerja = async (data) => {
    return BidangKerja.create(data);
}

const updateBidangKerja = async (data, id) => {
    return BidangKerja.update(data, {
        where: {
            id: id
        }
    });
}

const deleteBidangKerja = async (id) => {
    return BidangKerja.destroy({
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