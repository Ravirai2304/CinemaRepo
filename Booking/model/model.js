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
    price: {
        required: true,
        type: Number
    },
    show: {
        required: true,
        type: String
    },
    seat: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Booking', dataSchema)