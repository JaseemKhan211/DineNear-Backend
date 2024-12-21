const path = require('path');
const express = require('express');
const cors = require('cors');

const mapRourer = require('./routes/mapRouter');

// Start express app
const app = express();

// 1) GLOBAL MIDDLEWARES

// Implement CORS
app.use(cors());

// To parse JSON bodies
app.use(express.json());

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// 2) ROUTES
app.use('/api/v1/map', mapRourer);

module.exports = app;



