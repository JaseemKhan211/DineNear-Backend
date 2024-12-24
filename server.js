const mongoose = require('mongoose');
const dotenv = require('dotenv');
const http = require('http');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>', 
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,  // Set a higher timeout value
})
.then(() => console.log('DB connection successful!'))
.catch((err) => console.error('DB connection error:', err));




// Create Server
const server = http.createServer(app);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`App running on port ${port}...`);
});