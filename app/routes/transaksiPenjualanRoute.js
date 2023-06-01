const router = require('express').Router();
const transaksiPenjualanController = require('../controllers/transaksiPenjualanController');

router.get('/', transaksiPenjualanController.getAllTransaksiPenjualan);
router.get('/:id', transaksiPenjualanController.getTransaksiPenjualanById);
router.get('/pegawai/:pegawai_id', transaksiPenjualanController.getTransaksiPenjualanByPegawaiId);
router.get('/member/:member_id', transaksiPenjualanController.getTransaksiPenjualanByMemberId);
router.post('/', transaksiPenjualanController.createTransaksiPenjualan);
router.put('/:id', transaksiPenjualanController.updateTransaksiPenjualan);
router.delete('/:id', transaksiPenjualanController.deleteTransaksiPenjualan);

module.exports = router;