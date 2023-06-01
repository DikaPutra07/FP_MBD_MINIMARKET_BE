const barangTransaksiPembelianSevice = require('../services/barangTransaksiPembelianService');

const getAllBarangTransaksiPembelian = async (req, res) => {
    barangTransaksiPembelianSevice.getAllBarangTransaksiPembelian()
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Barang Transaksi Pembelian tidak ditemukan'
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

const getBarangTransaksiPembelianById = async (req, res) => {
    const id = req.params.id;
    barangTransaksiPembelianSevice.getBarangTransaksiPembelianById(id)
        .then((data) => {
            if(!data) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Barang Transaksi Pembelian tidak ditemukan'
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

const getBarangTransaksiPembelianByTransaksiPembelianId = async (req, res) => {
    const transaksi_pembelian_id = req.params.transaksi_pembelian_id;
    barangTransaksiPembelianSevice.getBarangTransaksiPembelianByTransaksiPembelianId(transaksi_pembelian_id)
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Barang Transaksi Pembelian tidak ditemukan'
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

const createBarangTransaksiPembelian = async (req, res) => {
    const data = req.body;
    barangTransaksiPembelianSevice.createBarangTransaksiPembelian(data)
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

const updateBarangTransaksiPembelian = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    barangTransaksiPembelianSevice.updateBarangTransaksiPembelian(data, id)
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

const deleteBarangTransaksiPembelian = async (req, res) => {
    const id = req.params.id;
    barangTransaksiPembelianSevice.deleteBarangTransaksiPembelian(id)
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
    getAllBarangTransaksiPembelian,
    getBarangTransaksiPembelianById,
    getBarangTransaksiPembelianByTransaksiPembelianId,
    createBarangTransaksiPembelian,
    updateBarangTransaksiPembelian,
    deleteBarangTransaksiPembelian
}
