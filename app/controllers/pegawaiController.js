const pegawaiService = require('../services/pegawaiService');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

//LOGIN

const loginPegawai = async (req, res) => {
    try {
        const user = await pegawaiService.getPegawaiByEmail(req.body.email);
        if (!user) {
            return res.status(400).json({
                status: 400,
                message: 'Invalid email or password'
            });
        }
        const validPassword = await bycrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                status: 400,
                message: 'Invalid email or password'
            });
        }

        const token = jwt.sign({
            id: user.id,
            nama: user.nama,
            role: user.bidang_kerja_id
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: '3h'
        });

        return res.status(200).json({
            status: 200,
            message: 'User logged in',
            data: {
                token: token
            }
        });
    }
    catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
};

const createPegawai = async (req, res) => {
    const { nama, email, password, bidang_kerja_id } = req.body;
    const user = await pegawaiService.getPegawaiByEmail(email);
    if (user) {
        return res.status(400).json({
            status: 400,
            message: 'User already registered'
        });
    }
    const salt = await bycrypt.genSalt(10);
    const hashPassword = await bycrypt.hash(password, salt);
    const data = {
        nama: nama,
        email: email,
        password: hashPassword,
        bidang_kerja_id: bidang_kerja_id
    }
    pegawaiService.createPegawai(data)
        .then((data) => {
            res.status(201).json({
                status: 201,
                message: 'User created',
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
    loginPegawai,
    createPegawai,
    updatePegawai,
    deletePegawai
}