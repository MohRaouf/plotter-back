const Data = require("../models/data");

exports.create = (req, res) => {
    Data.create(req.body).then(() => res.status(201).end())
        .catch((err) => (err.code === 11000) ? res.status(409).end() : res.status(400).end());
}

exports.read = (req, res) => {
    Data.find(req.params.id).then(result => result ? res.json(result) : res.status(404).end())
        .catch(() => res.status(400).end());
}

exports.readAll = (req, res) => {
    Data.find().populate('column').then(result => res.json(result)).catch(() => res.status(400).end());
}

exports.update = (req, res) => {
    Data.updateOne({ _id: req.params.id }, req.body).then(() => res.status(202).end())
        .catch((err) => (err.code === 11000) ? res.status(409).end() : res.status(400).end());
}

exports.remove = (req, res) => {
    Data.deleteOne({ _id: req.params.id }).then(() => res.status(202).end()).catch(() => res.status(400).end());
}

exports.chartData = async(req, res) => {
    Data.find({ 'name': { $in: [req.body.dimension, ...req.body.measures] } })
        .then(result => res.json(result)).catch(() => res.status(400).end());
}