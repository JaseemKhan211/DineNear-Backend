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

app.get('/', (req, res) => {
    console.log('Root route accessed');
    res.status(200).send('Welcome to the API');
});

app.use((req, res, next) => {
    console.log(`Incoming Request: ${req.method} ${req.url}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Body: ${JSON.stringify(req.body)}`);
    next();
});

// 2) ROUTES
app.use('/api/v1/map', mapRourer);

// Fallback Route: Catch all undefined routes
app.all('*', (req, res) => {
    const sanitizedUrl = req.originalUrl.trim(); // Remove unwanted spaces or newlines
    console.log(`Unhandled route accessed: ${req.method} ${sanitizedUrl}`);
    res.status(404).json({
        status: 'fail',
        message: `Cannot find ${sanitizedUrl} on this server!`
    });
});

module.exports = app;



