const transaksiPembelianService = require('../services/transaksiPembelianService');

const getAllTransaksiPembelian = async (req, res) => {
    transaksiPembelianService.getAllTransaksiPembelian()
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

const getTransaksiPembelianById = async (req, res) => {
    const id = req.params.id;
    transaksiPembelianService.getTransaksiPembelianById(id)
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

const getTransaksiPembelianByPegawaiId = async (req, res) => {
    const pegawai_id = req.params.pegawai_id;
    transaksiPembelianService.getTransaksiPembelianByPegawaiId(pegawai_id)
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

const getTransaksiPembelianBySupplierId = async (req, res) => {
    const supplier_id = req.params.supplier_id;
    transaksiPembelianService.getTransaksiPembelianBySupplierId(supplier_id)
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

const createTransaksiPembelian = async (req, res) => {
    const data = req.body;
    transaksiPembelianService.createTransaksiPembelian(data)
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

const updateTransaksiPembelian = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    transaksiPembelianService.updateTransaksiPembelian(data, id)
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

const deleteTransaksiPembelian = async (req, res) => {
    const id = req.params.id;
    transaksiPembelianService.deleteTransaksiPembelian(id)
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
    getAllTransaksiPembelian,
    getTransaksiPembelianById,
    getTransaksiPembelianByPegawaiId,
    getTransaksiPembelianBySupplierId,
    createTransaksiPembelian,
    updateTransaksiPembelian,
    deleteTransaksiPembelian
}