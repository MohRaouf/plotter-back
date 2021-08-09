const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    values: {
        type: [String | Number],
        required: true
    },
});

module.exports = mongoose.model('Data', dataSchema);