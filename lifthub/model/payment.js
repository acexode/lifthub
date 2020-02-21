const mongoose = require("mongoose");

const walletSchema = mongoose.Schema({
    amount: Number,      
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
})
const paymentSchema = mongoose.Schema({
    amount: Number,
    spaceId:  { type: mongoose.Schema.ObjectId, ref: 'Space' },
    name : String,
    customer: { type: mongoose.Schema.ObjectId, ref: 'User' },
    owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
    bookingStart : Date,
    bookingEnd : Date,
    txref : String
})

module.exports = mongoose.model("Payments", paymentSchema)