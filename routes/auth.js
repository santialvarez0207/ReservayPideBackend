const express = require('express');
const router = express.Router();
const auth = require('../controllers/login.controller');

router.post("/", auth.loginCtrl);

module.exports = router