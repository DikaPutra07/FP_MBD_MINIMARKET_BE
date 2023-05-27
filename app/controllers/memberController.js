const memberService = require('../services/memberService');

const getAllMember = async (req, res, next) => {
    memberService.getAllMember()
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    status: 'error',
                    message: 'Member tidak ditemukan'
                })
            }
            else {
                res.status(200).send({
                    status: 'success',
                    data: result
                })
            }
        })
        .catch((error) => {
            res.status(500).send({
                status: 'error',
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
                    status: 'error',
                    message: 'Member tidak ditemukan'
                })
            }
            else {
                return res.status(200).send({
                    status: 'success',
                    data: result
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

const createMember = async (req, res, next) => {
    const data = req.body;
    memberService.createMember(data)
        .then((created) => {
            return res.status(201).send({
                status: 'success',
                data: created
            })
        })
        .catch((error) => {
            return res.status(500).send({
                status: `error ${error}`,
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

const deleteMember = async (req, res, next) => {
    const id = req.params.id;
    memberService.deleteMember(id)
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
    getAllMember,
    getMemberById,
    createMember,
    updateMember,
    deleteMember
}