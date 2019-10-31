const mongoose = require("mongoose");

// schema is empty for now
const spaceSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    location:{
        type: [String],
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    availability:{
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Space", spaceSchema)