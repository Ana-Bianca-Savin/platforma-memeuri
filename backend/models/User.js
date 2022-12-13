const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Users", UsersSchema)