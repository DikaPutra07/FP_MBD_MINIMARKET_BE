const memberService = require('../services/memberService');

const getAllMember = async (req, res, next) => {
    memberService.getAllMember()
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    status: 404,
                    message: 'Data not found'
                })
            }
            else {
                res.status(200).send({
                    status: 200,
                    message: 'Data found',
                    data: result
                })
            }
        })
        .catch((error) => {
            res.status(500).send({
                status: 500,
                message: error.message
            })
        }
    )
}

const getMemberById = async (req, res, next) => {
    memberService.getMemberById(req.params.id)
        .then((result) => {
            if (!result) {
                return res.status(404).send({
                    status: 404,
                    message: 'Data not found'
                })
            }
            else {
                return res.status(200).send({
                    status: 200,
                    message: 'Data found',
                    data: result
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

const createMember = async (req, res, next) => {
    const data = req.body;
    memberService.createMember(data)
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
        }
    )
}

const updateMember = async (req, res, next) => {
    const data = req.body;
    const id = req.params.id;
    memberService.updateMember(data, id)
        .then((updated) => {
            if (!updated) {
                return res.status(404).send({
                    status: 404,
                    message: 'Data cannot be updated'
                })
            }
            else{
                return res.status(200).send({
                    status: 200,
                    message: 'Data successfully updated',
                    data: updated
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

const deleteMember = async (req, res, next) => {
    const id = req.params.id;
    memberService.deleteMember(id)
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
        }
    )
}

module.exports = {
    getAllMember,
    getMemberById,
    createMember,
    updateMember,
    deleteMember
}