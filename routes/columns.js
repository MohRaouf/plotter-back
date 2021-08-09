const express = require("express");
router = express.Router();
const { create, read, readAll, update, remove } = require("../controllers/column");

router.post('/', create);
router.get('/:id', read);
router.get('/', readAll);
router.patch('/:id', update);
router.delete('/:id', remove);

module.exports = router;