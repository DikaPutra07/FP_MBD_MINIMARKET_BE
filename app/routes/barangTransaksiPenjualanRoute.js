const router = require("express").Router();

const barangTransaksiPenjualanController = require("../controllers/barangTransaksiPenjualanController");

router.get("/", barangTransaksiPenjualanController.getAllBarangTransaksiPenjualan);
router.get("/:id", barangTransaksiPenjualanController.getBarangTransaksiPenjualanById);
router.post("/", barangTransaksiPenjualanController.createBarangTransaksiPenjualan);
router.put("/:id", barangTransaksiPenjualanController.updateBarangTransaksiPenjualan);
router.delete("/:id", barangTransaksiPenjualanController.deleteBarangTransaksiPenjualan);

module.exports = router;
