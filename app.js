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

app.get('/', (req, res) => 
    res.status(204).send()
);

// CHECK: Log Middleware
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.originalUrl}`);
    next();
});

// 2) ROUTES
app.use('/api/v1/map', mapRourer);

// Fallback Route: Catch all undefined routes
// app.all('*', (req, res) => {
//     res.status(404).json({
//         status: 'fail',
//         message: `Cannot find ${req.originalUrl} on this server!`
//     });
// });

module.exports = app;



