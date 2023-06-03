const barangService = require('../services/barangService');

const getAllBarang = async (req, res) => {
    barangService.getAllBarang()
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
                status: 'error',
                message: error.message
            })
        })
}

const getBarangById = async (req, res) => {
    const id = req.params.id;
    barangService.getBarangById(id)
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

const createBarang = async (req, res) => {
    const data = req.body;
    barangService.createBarang(data)
        .then((created) => {
            return res.status(201).send({
                status: 201,
                message: 'Data susccesfully created',
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

const updateBarang = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    barangService.updateBarang(data, id)
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

const deleteBarang = async (req, res) => {
    const id = req.params.id;
    barangService.deleteBarang(id)
        .then((deleted) => {
            if (!deleted) {
                return es.status(404).send({
                    status: 404,
                    message: 'Data cannot be deleted'
                })
            }
            else {
                return res.status(200).send({
                    status: 200,
                    message: 'Data successfully deleted',
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
    getAllBarang,
    getBarangById,
    createBarang,
    updateBarang,
    deleteBarang
}