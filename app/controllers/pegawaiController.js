const pegawaiService = require('../services/pegawaiService');

const getAllPegawai = async (req, res) => {
    pegawaiService.getAllPegawai()
        .then((data) => {
            res.status(200).json({
                status: 200,
                message: 'Success',
                data: data
            });
        }
    ).catch((error) => {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
    );
}

const getPegawaiById = async (req, res) => {
    const id = req.params.id;
    pegawaiService.getPegawaiById(id)
        .then((data) => {
            if (!data)
                res.status(404).json({
                status: 404,
                message: 'Data not found'
            });
            else
            res.status(200).json({
                status: 200,
                message: 'Success',
                data: data
            });
        }
    ).catch((error) => {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
    );
}

const createPegawai = async (req, res) => {
    const data = req.body;
    pegawaiService.createPegawai(data)
        .then((data) => {
            res.status(200).json({
                status: 200,
                message: 'Success',
                data: data
            });
        }
    ).catch((error) => {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
    );
}

const updatePegawai = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    pegawaiService.updatePegawai(data, id)
        .then((data) => {
            res.status(200).json({
                status: 200,
                message: 'Success',
                data: data
            });
        }
    ).catch((error) => {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
    );
}

const deletePegawai = async (req, res) => {
    const id = req.params.id;
    pegawaiService.deletePegawai(id)
        .then((data) => {
            res.status(200).json({
                status: 200,
                message: 'Success',
                data: data
            });
        }
    ).catch((error) => {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
    );
}

module.exports = {
    getAllPegawai,
    getPegawaiById,
    createPegawai,
    updatePegawai,
    deletePegawai
}