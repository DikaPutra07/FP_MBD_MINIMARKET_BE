const supplierService = require('../services/supplierService');

const getAllSupplier = async (req, res) => {
    supplierService.getAllSupplier()
        .then((data) => {
            res.status(200).json({
                status: 200,
                message: 'Success',
                data: data
            });
        }
    ).catch((error) => {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
    );
}

const getSupplierById = async (req, res) => {
    const id = req.params.id;
    supplierService.getSupplierById(id)
        .then((data) => {
            if (!data)
                res.status(404).json({
                status: 404,
                message: 'Data not found'
            });
            else
            res.status(200).json({
                status: 200,
                message: 'Success',
                data: data
            });
        })
        .catch((error) => {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    });
}

const createSupplier = async (req, res) => {
    const data = req.body;
    supplierService.createSupplier(data)
        .then((data) => {
            res.status(200).json({
                status: 200,
                message: 'Success',
                data: data
            });
        }
    ).catch((error) => {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
    );
}

const updateSupplier = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    supplierService.updateSupplier(data, id)
        .then((data) => {
            if (!data)
                res.status(404).json({
                status: 404,
                message: 'Data not found'
            });
            else
            res.status(200).json({
                status: 200,
                message: 'Success',
                data: data
            });
        }
    ).catch((error) => {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
    );
}

const deleteSupplier = async (req, res) => {
    const id = req.params.id;
    supplierService.deleteSupplier(id)
        .then((data) => {
            if (!data)
                res.status(404).json({
                status: 404,
                message: 'Data not found'
            });
            else
            res.status(200).json({
                status: 200,
                message: 'Success',
                data: data
            });
        }
    ).catch((error) => {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
    );
}

module.exports = {
    getAllSupplier,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
}