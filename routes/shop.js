const express = require("express");
const router = express.Router();
const shop = require("../controllers/shop.controller")

router.get("/", shop.getShops);
router.post("/", shop.createShop);
router.get("/unique/:id", shop.getShop); 
router.put("/:id", shop.editShop);
router.delete("/:id", shop.deleteShop);

module.exports = router 