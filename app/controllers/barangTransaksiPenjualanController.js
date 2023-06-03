const barangTransaksiPenjualanSevice = require('../services/barangTransaksiPenjualanService');

const getAllBarangTransaksiPenjualan = async (req, res) => {
    barangTransaksiPenjualanSevice.getAllBarangTransaksiPenjualan()
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    status: 404,
                    message: 'Data not found'
                })
            }
            else {
                return res.status(200).send({
                    status: 200,
                    message: 'Data found',
                    data: data
                })
            }
        })
        .catch((error) => {
            return res.status(500).send({
                status: 500,
                message: error.message
            })
        }
        )
}

const getBarangTransaksiPenjualanById = async (req, res) => {
    const id = req.params.id;
    barangTransaksiPenjualanSevice.getBarangTransaksiPenjualanById(id)
        .then((data) => {
            if(!data) {
                return res.status(404).send({
                    status: 404,
                    message: 'Data not found'
                })
            }
            else {
                return res.status(200).send({
                    status: 200,
                    message: 'Data found',
                    data: data
                })
            }
        }
        )
        .catch((error) => {
            return res.status(500).send({
                status: 500,
                message: error.message
            })
        }
        )
}

const getBarangTransaksiPenjualanByTransaksiPenjualanId = async (req, res) => {
    const transaksi_penjualan_id = req.params.transaksi_penjualan_id;
    barangTransaksiPenjualanSevice.getBarangTransaksiPenjualanByTransaksiPenjualanId(transaksi_penjualan_id)
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    status: 404,
                    message: 'Data not found'
                })
            }
            else {
                return res.status(200).send({
                    status: 200,
                    message: 'Data found',
                    data: data
                })
            }
        }
    )
        .catch((error) => {
            return res.status(500).send({
                status: 500,
                message: error.message
            })
        }
    )
}

const createBarangTransaksiPenjualan = async (req, res) => {
    const data = req.body;
    barangTransaksiPenjualanSevice.createBarangTransaksiPenjualan(data)
        .then((created) => {
            if (!created) {
                return res.status(404).send({
                    status: 404,
                    message: 'Data cannot be created'
                })
            }
            else {
                return res.status(201).send({
                    status: 201,
                    message: 'Data successfully created',
                    data: created
                })
            }
        })
        .catch((error) => {
            return res.status(500).send({
                status: 500,
                message: error.message
            })
        })
}

const updateBarangTransaksiPenjualan = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    barangTransaksiPenjualanSevice.updateBarangTransaksiPenjualan(data, id)
        .then((updated) => {
            if (!updated) {
                return res.status(404).send({
                    status: 404,
                    message: 'Data cannot be updated'
                })
            }
            else {
                return res.status(200).send({
                    status: 200,
                    message: 'Data successfully updated',
                    data: updated
                })
            }
        })
        .catch((error) => {
            return res.status(500).send({
                status: 500,
                message: error.message
            })
        })
}   

const deleteBarangTransaksiPenjualan = async (req, res) => {
    const id = req.params.id;
    barangTransaksiPenjualanSevice.deleteBarangTransaksiPenjualan(id)
        .then((deleted) => {
            if (!deleted) {
                return res.status(404).send({
                    status: 404,
                    message: 'Data cannot be deleted'
                })
            }
            else{
                return res.status(200).send({
                    status: 200,
                    message: 'Data successfully deleted',
                    data: deleted
                })
            }
        })
        .catch((error) => {
            return res.status(500).send({
                status: 'error',
                message: error.message
            })
        })
}

module.exports = {
    getAllBarangTransaksiPenjualan,
    getBarangTransaksiPenjualanById,
    getBarangTransaksiPenjualanByTransaksiPenjualanId,
    createBarangTransaksiPenjualan,
    updateBarangTransaksiPenjualan,
    deleteBarangTransaksiPenjualan
}
