const colors = require('colors');
const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB is connected: ${conn.connection.host}`.blue.bold);
};

module.exports = connectDB;
