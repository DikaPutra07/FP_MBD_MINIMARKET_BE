const { Supplier } = require('../models');

const getAllSupplier = async () => {
    return Supplier.findAll();
}

const getSupplierById = async (id) => {
    return Supplier.findOne({
        where: {
            id: id
        }
    });
}

const createSupplier = async (data) => {
    return Supplier.create(data);
}

const updateSupplier = async (data, id) => {
    return Supplier.update(data, {
        where: {
            id: id
        }
    });
}

const deleteSupplier = async (id) => {
    return Supplier.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllSupplier,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
}