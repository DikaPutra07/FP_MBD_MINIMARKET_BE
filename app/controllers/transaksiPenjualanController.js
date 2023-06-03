const transaksiPenjualanService = require('../services/transaksiPenjualanService');

const getAllTransaksiPenjualan = async (req, res) => {
    transaksiPenjualanService.getAllTransaksiPenjualan()
        .then((result) => {
            if (!result) {
                res.status(404).json({
                    status: 404,
                    message: 'Data not found'
                })
            }
            else {
                res.status(200).json({
                    status: 200,
                    message: 'Data found',
                    data: result
                });
            }
        }
    ).catch((error) => {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
    );
}

const getTransaksiPenjualanById = async (req, res) => {
    const id = req.params.id;
    transaksiPenjualanService.getTransaksiPenjualanById(id)
        .then((result) => {
            if (!result)
                res.status(404).json({
                status: 404,
                message: 'Data not found'
            });
            else
            res.status(200).json({
                status: 200,
                message: 'Data found',
                data: result
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

const getTransaksiPenjualanByPegawaiId = async (req, res) => {
    const pegawai_id = req.params.pegawai_id;
    transaksiPenjualanService.getTransaksiPenjualanByPegawaiId(pegawai_id)
        .then((result) => {
            if (!result)
                res.status(404).json({
                    status: 404,
                    message: 'Data not found'
                });
            else
                res.status(200).json({
                    status: 200,
                    message: 'Data found',
                    data: result
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

const getTransaksiPenjualanByMemberId = async (req, res) => {
    const member_id = req.params.member_id;
    transaksiPenjualanService.getTransaksiPenjualanByMemberId(member_id)
        .then((result) => {
            if (!result)
                res.status(404).json({
                    status: 404,
                    message: 'Data not found'
                });
            else
                res.status(200).json({
                    status: 200,
                    message: 'Data found',
                    data: result
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

const createTransaksiPenjualan = async (req, res) => {
    const data = req.body;
    transaksiPenjualanService.createTransaksiPenjualan(data)
        .then((result) => {
            if (!result)
                res.status(404).json({
                    status: 404,
                    message: 'Data cannot be created'
                });
            else
                res.status(201).json({
                    status: 201,
                    message: 'Data successfully created',
                    data: result
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

const updateTransaksiPenjualan = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    transaksiPenjualanService.updateTransaksiPenjualan(data, id)
        .then((result) => {
            if (!result)
                res.status(404).json({
                    status: 404,
                    message: 'Data cannot be updated'
                });
            else
                res.status(200).json({
                    status: 200,
                    message: 'Data successfully updated',
                    data: result
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

const deleteTransaksiPenjualan = async (req, res) => {
    const id = req.params.id;
    transaksiPenjualanService.deleteTransaksiPenjualan(id)
        .then((result) => {
            if (!result)
                res.status(404).json({
                status: 404,
                message: 'Data cannot be deleted'
            });
            else
                res.status(200).json({
                    status: 200,
                    message: 'Data successfully deleted',
                    data: result
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
    getAllTransaksiPenjualan,
    getTransaksiPenjualanById,
    getTransaksiPenjualanByPegawaiId,
    getTransaksiPenjualanByMemberId,
    createTransaksiPenjualan,
    updateTransaksiPenjualan,
    deleteTransaksiPenjualan
}
