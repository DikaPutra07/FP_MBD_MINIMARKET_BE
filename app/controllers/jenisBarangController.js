const jenisBarangService = require('../services/jenisBarangService');

const getAllJenisBarang = async (req, res) => {
    jenisBarangService.getAllJenisBarang()
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    status: 'error',
                    message: 'Jenis Barang tidak ditemukan'
                })
            }
            else {
                res.status(200).send({
                    status: 'success',
                    data: data
                })
            }
        })
        .catch((error) => {
            res.status(500).send({
                status: 'error',
                message: error.message
            })
        })
}

const getJenisBarangById = async (req, res) => {
    jenisBarangService.getJenisBarangById(req.params.id)
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Jenis Barang tidak ditemukan'
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

const createJenisBarang = async (req, res) => {
    const data = req.body;
    jenisBarangService.createJenisBarang(data)
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
        }
    )
}

const updateJenisBarang = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    jenisBarangService.updateJenisBarang(data, id)
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
        }
    )
}

const deleteJenisBarang = async (req, res) => {
    const id = req.params.id;
    jenisBarangService.deleteJenisBarang(id)
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
        }
    )
}

module.exports = {
    getAllJenisBarang,
    getJenisBarangById,
    createJenisBarang,
    updateJenisBarang,
    deleteJenisBarang
}