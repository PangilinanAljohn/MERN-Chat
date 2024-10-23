const mongoose = require("mongoose");

const database = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to database')
    } catch (error) {
        console.log('Error connecting to database')
    }
}

module.exports = database;