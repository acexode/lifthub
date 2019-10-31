const mongoose = require("mongoose");

// schema is empty for now
const spaceSchema = mongoose.Schema({
    type:{
        type: String,
        required: true
    },
    details:[{
        name:{
        type: String,
        required: true
        },
        image:{
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
    }]
    
})

module.exports = mongoose.model("Space", spaceSchema)