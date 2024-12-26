const mongoose = require("mongoose");

const mapSchema = new mongoose.Schema({
    current_latitude: {
        type: Number,
        required: [true, 'A user must have a current latitude'],
    },
    current_longitude: {
        type: Number,
        required: [true, 'A user must have a current longitude'],
    },
    target_latitude: {
        type: Number,
        required: [true, 'A user must have a target latitude'],
    },
    target_longitude: {
        type: Number,
        required: [true, 'A user must have a target longitude']
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;