const express = require("express");
router = express.Router();
const { chartData, create, read, readAll, update, remove } = require("../controllers/data");

router.post('/crud', create);
router.get('crud/:id', read);
router.get('crud/', readAll);
router.patch('crud/:id', update);
router.delete('crud/:id', remove);

router.post('/', chartData);

module.exports = router;