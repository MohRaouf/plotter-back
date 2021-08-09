const Column = require("../models/column");

exports.create = (req, res) => {
    Column.create(req.body).then(() => res.status(201).end()).catch((err) => (err.code === 11000) ? res.status(409).end() : res.status(400).end());
}

exports.read = (req, res) => {
    Column.find(req.params.id).then(result => result ? res.json(result) : res.status(404).end())
        .catch(() => res.status(400).end());
}

exports.readAll = (req, res) => {
    Column.find().then(result => res.json(result)).catch(() => res.status(400).end());
}

exports.update = (req, res) => {
    Column.updateOne({ _id: req.params.id }, req.body).then(() => res.status(202).end()).catch(() => (err.code === 11000) ? res.status(409).end() : res.status(400).end());
}

exports.remove = (req, res) => {
    Column.deleteOne({ _id: req.params.id }).then(() => res.status(202).end()).catch(() => res.status(400).end());
}