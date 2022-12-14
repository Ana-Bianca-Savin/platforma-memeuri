const mongoose = require("mongoose");
const User = require("../models/User")

const MEMESSchema = new mongoose.Schema({
    Description: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }
})

module.exports = mongoose.model("MEME", MEMESSchema)