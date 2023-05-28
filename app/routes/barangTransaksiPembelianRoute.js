const router = require("express").Router();

const barangTransaksiPembelianController = require("../controllers/barangTransaksiPembelianController");

router.get("/", barangTransaksiPembelianController.getAllBarangTransaksiPembelian);
router.get("/:id", barangTransaksiPembelianController.getBarangTransaksiPembelianById);
router.post("/", barangTransaksiPembelianController.createBarangTransaksiPembelian);
router.put("/:id", barangTransaksiPembelianController.updateBarangTransaksiPembelian);
router.delete("/:id", barangTransaksiPembelianController.deleteBarangTransaksiPembelian);

module.exports = router;
