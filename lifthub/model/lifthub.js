const mongoose = require("mongoose");

// schema is empty for now
const lifthubSchema = mongoose.Schema({})

module.exports = mongoose.model("LiftHub", lifthubSchema)