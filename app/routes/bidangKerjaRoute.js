const router = require("express").Router();

const bidangKerjaController = require("../controllers/bidangKerjaController");

router.get("/", bidangKerjaController.getAllBidangKerja);
router.get("/:id", bidangKerjaController.getBidangKerjaById);
router.post("/", bidangKerjaController.createBidangKerja);
router.put("/:id", bidangKerjaController.updateBidangKerja);
router.delete("/:id", bidangKerjaController.deleteBidangKerja);

module.exports = router;
