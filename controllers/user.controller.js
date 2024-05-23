const User = require("../models/user");
const { encrypt } = require("../utils/encript")
const UserCtrl = {};


UserCtrl.getUsers = async (req, res, next) => {
    try {
        const save = await User.find();
        res.status(200).send(save)
    } catch (err) {
        res.status(400).send(err)

    }
};

UserCtrl.getUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const save = await User.findById(id);
        res.status(200).send(save)
    } catch (err) {
        res.status(400).send(err)

    }
};


UserCtrl.createUser = async (req, res, next) => {
    try {
        const { name, email,
            rol,
            lastname,
            address,
            phone
        } = req.body;

        const body = {
            name,
            email,
            password: await encrypt(req.body.password),
            rol,
            lastname,
            address,
            phone,
        };
        var save = await User.create(body);
        res.status(200).send(save)
    } catch (err) {
        res.status(400).send(err)
    }
};


UserCtrl.editUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        save = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).send(save)
    } catch (err) {
        res.status(400).send(err)
    }
};

UserCtrl.deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndRemove(req.params.id);
        res.json({ status: "User Deleted" });
    } catch (err) {
        res.status(400).send(err)
    }
};



module.exports = UserCtrl;