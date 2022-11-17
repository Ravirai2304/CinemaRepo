const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    },
    rating: {
        type: Number
    },
    duration: {
        required: true,
        type: String
    },
    genre: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('MoviesCatalog', dataSchema)