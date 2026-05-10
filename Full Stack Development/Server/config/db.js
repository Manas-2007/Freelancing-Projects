const mongoose = require('mongoose');
const dns = require('dns');

const connectDB = async () => {
    try {
        dns.setServers(['8.8.8.8', '1.1.1.1']);
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`====================================`);
        console.log(`MongoDB Connected: ${conn.connection.host} 🍃`);
        console.log(`====================================`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Failure par band kar do
    }
};

module.exports = connectDB;