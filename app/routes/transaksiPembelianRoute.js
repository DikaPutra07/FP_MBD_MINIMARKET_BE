const router = require('express').Router();
const transaksiPembelianController = require('../controllers/transaksiPembelianController');

router.get('/', transaksiPembelianController.getAllTransaksiPembelian);
router.get('/:id', transaksiPembelianController.getTransaksiPembelianById);
router.post('/', transaksiPembelianController.createTransaksiPembelian);
router.put('/:id', transaksiPembelianController.updateTransaksiPembelian);
router.delete('/:id', transaksiPembelianController.deleteTransaksiPembelian);

module.exports = router;