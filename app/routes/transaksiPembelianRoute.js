const router = require('express').Router();
const transaksiPembelianController = require('../controllers/transaksiPembelianController');

router.get('/', transaksiPembelianController.getAllTransaksiPembelian);
router.get('/:id', transaksiPembelianController.getTransaksiPembelianById);
router.get('/pegawai/:pegawai_id', transaksiPembelianController.getTransaksiPembelianByPegawaiId);
router.get('/supplier/:supplier_id', transaksiPembelianController.getTransaksiPembelianBySupplierId);
router.post('/', transaksiPembelianController.createTransaksiPembelian);
router.put('/:id', transaksiPembelianController.updateTransaksiPembelian);
router.delete('/:id', transaksiPembelianController.deleteTransaksiPembelian);

module.exports = router;