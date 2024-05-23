const express = require("express");
const router = express.Router();
const plate = require("../controllers/plate.controller")

router.get("/", plate.getPlates);
router.post("/", plate.createPlate);
router.get("/unique/:id", plate.getPlate); 
router.put("/:id", plate.editPlate);
router.delete("/:id", plate.deletePlate);

module.exports = router 