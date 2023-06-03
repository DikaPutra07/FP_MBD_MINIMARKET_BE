const jenisBarangService = require('../services/jenisBarangService');

const getAllJenisBarang = async (req, res) => {
    jenisBarangService.getAllJenisBarang()
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    status: 404,
                    message: 'Data not found'
                })
            }
            else {
                res.status(200).send({
                    status: 200,
                    message: 'Data found',
                    data: data
                })
            }
        })
        .catch((error) => {
            res.status(500).send({
                status: 500,
                message: error.message
            })
        })
}

const getJenisBarangById = async (req, res) => {
    jenisBarangService.getJenisBarangById(req.params.id)
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

const createJenisBarang = async (req, res) => {
    const data = req.body;
    jenisBarangService.createJenisBarang(data)
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
        }
    )
}

const updateJenisBarang = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    jenisBarangService.updateJenisBarang(data, id)
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
        }
    )
}

const deleteJenisBarang = async (req, res) => {
    const id = req.params.id;
    jenisBarangService.deleteJenisBarang(id)
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