const router = require('express').Router();
const pegawaiController = require('../controllers/pegawaiController');

router.get('/', pegawaiController.getAllPegawai);
router.get('/:id', pegawaiController.getPegawaiById);
router.post('/login', pegawaiController.loginPegawai);
router.post('/register', pegawaiController.createPegawai);
router.put('/:id', pegawaiController.updatePegawai);
router.delete('/:id', pegawaiController.deletePegawai);

module.exports = router;