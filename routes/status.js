const express = require("express");
const router = express.Router();
const status = require("../controllers/status.controller")

router.get("/", status.getStatus);

module.exports = router 