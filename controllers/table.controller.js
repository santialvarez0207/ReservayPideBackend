const Table = require("../models/table");

const TableCtrl = {};


TableCtrl.getTables = async (req, res, next) => {
    try{
        const save = await Table.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

TableCtrl.createTable = async (req, res, next) => {
    try{
        const { type, count,status} = req.body;

        const body = {type, count,status};
        var save= await Table.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};

TableCtrl.getTable = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Table.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

TableCtrl.editTable = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Table.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
    res.status(400).send(err)
}

};

TableCtrl.deleteTable = async (req, res, next) => {
    try{
        await Table.findByIdAndRemove(req.params.id);
        res.json({ status: "Table Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};




module.exports = TableCtrl;