const Map = require('../models/mapModel');

exports.createMap = async (req, res) => {
    try {
        const newMap = await Map.create(req.body);
        
        res.status(201).json({
            status: 'success',
            data: {
                map: newMap
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};