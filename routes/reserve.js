const express = require("express");
const router = express.Router();
const reserve = require("../controllers/reserve.controller")

router.get("/", reserve.getReserves);
router.post("/", reserve.createReserve);
router.get("/unique/:id", reserve.getReserve); 
router.put("/:id", reserve.editReserve);
router.delete("/:id", reserve.deleteReserve);

module.exports = router 