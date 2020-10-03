let mongoose = require('mongoose');
let Mod = require('../models/moduleModel');

function getModules(req, res) {
    let query = Mod.find({});
    query.exec((err, modules) => {
        if(err) res.send(err);
        res.json(modules);
    });
}

function postModule(req, res) {
    var newModule = new Mod(req.body);
    newModule.save((err,module) => {
        if(err) {
            res.send(err);
        }
        else { 
            res.json({message: "mod successfully added!", module });
        }
    });
}

function deleteModule(req, res) {
    Mod.remove({_id : req.params.id}, (err, result) => {
        res.json({ message: "mod successfully deleted!", result });
    });
}

function updateModule(req, res) {
    Mod.findById({_id: req.params.id}, (err, module) => {
        if(err) res.send(err);
        Object.assign(module, req.body).save((err, module) => {
            if(err) res.send(err);
            res.json({ message: 'mod updated!', module });
        });
    });
}

//export all the functions
module.exports = { getModules, postModule, deleteModule, updateModule };