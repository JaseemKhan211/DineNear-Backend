const mongoose = require("mongoose");

const mapSchema = new mongoose.Schema({
    radius: {
        type: Number,
        required: [true, 'A user must have a radius'],
    },
    place: {
        type: String,
        required: [true, 'A user must have a place'],
    },
    latitude: {
        type: Number,
        required: [true, 'A user must have a latitude'],
    },
    longitude: {
        type: Number,
        required: [true, 'A user must have a longitude'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;