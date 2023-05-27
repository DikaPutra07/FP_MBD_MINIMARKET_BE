const supplierRepository = require('../repositories/supplierRepository');

const getAllSupplier = async () => {
    try {
        const supplier = await supplierRepository.getAllSupplier();
        return supplier;
    }
    catch (error) {
        throw error;
    }
}

const getSupplierById = async (id) => {
    try {
        const supplier = await supplierRepository.getSupplierById(id);
        return supplier;
    }
    catch (error) {
        throw error;
    }
}

const createSupplier = async (data) => {
    try {
        const supplier = await supplierRepository.createSupplier(data);
        return supplier;
    }
    catch (error) {
        throw error;
    }
}

const updateSupplier = async (data, id) => {
    try {
        const supplier = await supplierRepository.updateSupplier(data, id);
        return supplier;
    }
    catch (error) {
        throw error;
    }
}

const deleteSupplier = async (id) => {
    try {
        const supplier = await supplierRepository.deleteSupplier(id);
        return supplier;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllSupplier,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
}