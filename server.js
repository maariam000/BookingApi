const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');

const app = express();

// Load env variables
dotenv.config({ path: './config/config.env' });

// Import the db
connectDB();

// Import route files
const users = require('./routes/users');

// Mount Routers
app.use('/api/auth', users);

// Body Parser
// app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5003;

const server = app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold);
});

// Handle unhandled rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.body);
  server.close(() => {
    process.exit(1);
  });
});
