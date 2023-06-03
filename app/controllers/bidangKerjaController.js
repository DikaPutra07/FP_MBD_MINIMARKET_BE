const bidangKerjaService = require('../services/bidangKerjaService');

const getAllBidangKerja = async (req, res) => {
    bidangKerjaService.getAllBidangKerja()
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
        })
}

const getBidangKerjaById = async (req, res) => {
    const id = req.params.id;
    bidangKerjaService.getBidangKerjaById(id)
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

const createBidangKerja = async (req, res) => {
    const data = req.body;
    bidangKerjaService.createBidangKerja(data)
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

const updateBidangKerja = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    bidangKerjaService.updateBidangKerja(data, id)
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

const deleteBidangKerja = async (req, res) => {
    const id = req.params.id;
    bidangKerjaService.deleteBidangKerja(id)
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

module.exports = {
    getAllBidangKerja,
    getBidangKerjaById,
    createBidangKerja,
    updateBidangKerja,
    deleteBidangKerja
}
