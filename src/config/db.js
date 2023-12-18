const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://nha:3102000Nha@tasktrackercluster.enxb8uo.mongodb.net/tasktrackerdb');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;