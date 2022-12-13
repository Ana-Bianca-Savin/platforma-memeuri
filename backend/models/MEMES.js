const mongoose = require("mongoose");

const MEMESSchema = new mongoose.Schema({
    Description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("MEME", MEMESSchema)