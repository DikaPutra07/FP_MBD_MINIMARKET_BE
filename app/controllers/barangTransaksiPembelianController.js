const barangTransaksiPembelianSevice = require('../services/barangTransaksiPembelianService');

const getAllBarangTransaksiPembelian = async (req, res) => {
    barangTransaksiPembelianSevice.getAllBarangTransaksiPembelian()
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

const getBarangTransaksiPembelianById = async (req, res) => {
    const id = req.params.id;
    barangTransaksiPembelianSevice.getBarangTransaksiPembelianById(id)
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

const getBarangTransaksiPembelianByTransaksiPembelianId = async (req, res) => {
    const transaksi_pembelian_id = req.params.transaksi_pembelian_id;
    barangTransaksiPembelianSevice.getBarangTransaksiPembelianByTransaksiPembelianId(transaksi_pembelian_id)
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

const createBarangTransaksiPembelian = async (req, res) => {
    const data = req.body;
    barangTransaksiPembelianSevice.createBarangTransaksiPembelian(data)
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
                    message: 'Data susccesfully created',
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

const updateBarangTransaksiPembelian = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    barangTransaksiPembelianSevice.updateBarangTransaksiPembelian(data, id)
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
                    message: 'Data susccesfully updated',
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

const deleteBarangTransaksiPembelian = async (req, res) => {
    const id = req.params.id;
    barangTransaksiPembelianSevice.deleteBarangTransaksiPembelian(id)
        .then((deleted) => {
            if (!deleted) {
                return res.status(404).send({
                    status: 404,
                    message: 'Data cannot be deleted'
                })
            }
            else {
                return res.status(200).send({
                    status: 200,
                    message: 'Data susccesfully deleted',
                    data: deleted
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

module.exports = {
    getAllBarangTransaksiPembelian,
    getBarangTransaksiPembelianById,
    getBarangTransaksiPembelianByTransaksiPembelianId,
    createBarangTransaksiPembelian,
    updateBarangTransaksiPembelian,
    deleteBarangTransaksiPembelian
}
