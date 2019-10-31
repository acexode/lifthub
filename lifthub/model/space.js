const mongoose = require("mongoose");

// schema is empty for now
const spaceSchema = mongoose.Schema({
    spaceType: string,
    details: {
        name: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        availability: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model("Space", spaceSchema)