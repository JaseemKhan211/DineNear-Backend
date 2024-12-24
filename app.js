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

// Ignore Favicon Requests
app.get('/favicon.ico', (req, res) => 
    res.status(204).send()
);

app.get('/favicon.png', (req, res) => 
    res.status(204).send()
);

// 2) ROUTES
app.use('/api/v1/map', mapRourer);

module.exports = app;



