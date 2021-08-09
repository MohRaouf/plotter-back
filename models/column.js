const mongoose = require('mongoose');

const columnSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    function: {
        type: String,
        enum: ['dimension', 'measure'],
        required: true
    },
});

module.exports = mongoose.model('Column', columnSchema);