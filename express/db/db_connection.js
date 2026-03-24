const mongoose = require('mongoose');

const connectDB = async () => {
     try {
        await mongoose.connect('mongodb+srv://Rishab12:Rishab12@cluster0.vhnhej8.mongodb.net/?appName=Cluster0');
        console.log("MongoDB connected successfully");
     }
     catch (err) {
        console.log("MongoDB Connection Error: ", err);
     }
}

module.exports = connectDB;