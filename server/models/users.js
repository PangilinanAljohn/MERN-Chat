const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    profilePic: {
        type: String,
        default: ""
    }
})

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;