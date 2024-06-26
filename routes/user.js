const express = require("express");
const router = express.Router();
const user = require("../controllers/user.controller")

router.get("/", user.getUsers);
router.post("/", user.createUser);
router.get("/unique/:id", user.getUser); 
router.put("/:id", user.editUser);
router.delete("/:id", user.deleteUser);

module.exports = router 