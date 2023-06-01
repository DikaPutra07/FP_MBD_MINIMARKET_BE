const router = require("express").Router();

const barangTransaksiPembelianController = require("../controllers/barangTransaksiPembelianController");

router.get("/", barangTransaksiPembelianController.getAllBarangTransaksiPembelian);
router.get("/:id", barangTransaksiPembelianController.getBarangTransaksiPembelianById);
router.get("/transaksi/:transaksi_pembelian_id", barangTransaksiPembelianController.getBarangTransaksiPembelianByTransaksiPembelianId);
router.post("/", barangTransaksiPembelianController.createBarangTransaksiPembelian);
router.put("/:id", barangTransaksiPembelianController.updateBarangTransaksiPembelian);
router.delete("/:id", barangTransaksiPembelianController.deleteBarangTransaksiPembelian);

module.exports = router;
