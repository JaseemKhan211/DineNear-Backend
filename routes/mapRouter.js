const express = require('express');
const mapController = require('../controllers/mapController');

const router = express.Router();

router.post('/inMap', mapController.createMap);

module.exports = router;