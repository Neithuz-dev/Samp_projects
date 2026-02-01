const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/youtube_clone");
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error", error);
        process.exit(1);
    }
};

module.exports = connectDB;