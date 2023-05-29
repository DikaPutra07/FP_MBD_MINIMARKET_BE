const bidangKerjaService = require('../services/bidangKerjaService');

const getAllBidangKerja = async (req, res) => {
    bidangKerjaService.getAllBidangKerja()
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Bidang Kerja tidak ditemukan'
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
        })
}

const getBidangKerjaById = async (req, res) => {
    const id = req.params.id;
    bidangKerjaService.getBidangKerjaById(id)
        .then((data) => {
            if (!data) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Bidang Kerja tidak ditemukan'
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

const createBidangKerja = async (req, res) => {
    const data = req.body;
    bidangKerjaService.createBidangKerja(data)
        .then((created) => {
            return res.status(201).send({
                status: 'success',
                data: created
            })
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

const updateBidangKerja = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    bidangKerjaService.updateBidangKerja(data, id)
        .then((updated) => {
            return res.status(200).send({
                status: 'success',
                data: updated
            })
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

const deleteBidangKerja = async (req, res) => {
    const id = req.params.id;
    bidangKerjaService.deleteBidangKerja(id)
        .then((deleted) => {
            return res.status(200).send({
                status: 'success',
                data: deleted
            })
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

module.exports = {
    getAllBidangKerja,
    getBidangKerjaById,
    createBidangKerja,
    updateBidangKerja,
    deleteBidangKerja
}
