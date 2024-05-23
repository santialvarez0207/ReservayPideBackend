const Plate = require("../models/plate");

const PlateCtrl = {};


PlateCtrl.getPlates = async (req, res, next) => {
    try{
        const save = await Plate.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

PlateCtrl.createPlate = async (req, res, next) => {
    try{
        const { name, price,description,category} = req.body;

        const body = {name, price,description,category};
        var save= await Plate.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};

PlateCtrl.getPlate = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Plate.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

PlateCtrl.editPlate = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Plate.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
    res.status(400).send(err)
}

};

PlateCtrl.deletePlate = async (req, res, next) => {
    try{
        await Plate.findByIdAndRemove(req.params.id);
        res.json({ status: "Plate Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};




module.exports = PlateCtrl;