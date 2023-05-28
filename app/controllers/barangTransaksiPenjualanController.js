const barangTransaksiPenjualanSevice = require('../services/barangTransaksiPenjualanService');

const getAllBarangTransaksiPenjualan = async (req, res) => {
    barangTransaksiPenjualanSevice.getAllBarangTransaksiPenjualan()
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Barang Transaksi Penjualan tidak ditemukan'
                })
            }
            else {
                return res.status(200).send({
                    status: 'success',
                    data: data
                })
            }
        })
        .catch((error) => {
            return res.status(500).send({
                status: 'error',
                message: error.message
            })
        }
        )
}

const getBarangTransaksiPenjualanById = async (req, res) => {
    barangTransaksiPenjualanSevice.getBarangTransaksiPenjualanById(id)
        .then((data) => {
            if(!data) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Barang Transaksi Penjualan tidak ditemukan'
                })
            }
            else {
                return res.status(200).send({
                    status: 'success',
                    data: data
                })
            }
        }
        )
        .catch((error) => {
            return res.status(500).send({
                status: 'error',
                message: error.message
            })
        }
        )
}

const createBarangTransaksiPenjualan = async (req, res) => {
    const data = req.body;
    barangTransaksiPenjualanSevice.createBarangTransaksiPenjualan(data)
        .then((created) => {
            return res.status(201).send({
                status: 'success',
                data: created
            })
        })
        .catch((error) => {
            return res.status(500).send({
                status: 'error',
                message: error.message
            })
        })
}

const updateBarangTransaksiPenjualan = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    barangTransaksiPenjualanSevice.updateBarangTransaksiPenjualan(id, data)
        .then((updated) => {
            return res.status(200).send({
                status: 'success',
                data: updated
            })
        })
        .catch((error) => {
            return res.status(500).send({
                status: 'error',
                message: error.message
            })
        })
}   

const deleteBarangTransaksiPenjualan = async (req, res) => {
    const id = req.params.id;
    barangTransaksiPenjualanSevice.deleteBarangTransaksiPenjualan(id)
        .then((deleted) => {
            return res.status(200).send({
                status: 'success',
                data: deleted
            })
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
    createBarangTransaksiPenjualan,
    updateBarangTransaksiPenjualan,
    deleteBarangTransaksiPenjualan
}
