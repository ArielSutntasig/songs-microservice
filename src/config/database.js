require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in .env file");
        }

        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            retryWrites: true,
            w: 'majority'
        };

        await mongoose.connect(process.env.MONGO_URI, options);
        console.log('Connected to MongoDB Atlas successfully');
    } catch (error) {
        console.error('MongoDB Atlas connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;