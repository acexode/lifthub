const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;


const bookingSchema =  Schema({
    _bookingId: Schema.Types.ObjectId,
    user: { type: Schema.ObjectId, ref: 'User' },
    bookingStart: Date,
    bookingEnd: Date,
    startHour: Number,
    duration: Number,
    recurring: [], 
    price : Number,   
    spaceId: { type: Schema.ObjectId, ref: 'Space' }
  });
  // Validation to ensure a space cannot be double-booked
bookingSchema.path('bookingStart').validate(function(value) {
  
    // Extract the Space Id from the query object   
    let spaceId = this.spaceId
    
    // Convert booking Date objects into a number value
    let newBookingStart = value.getTime()
    let newBookingEnd = this.bookingEnd.getTime()   
   
    // Function to check for booking clash
    let clashesWithExisting = (existingBookingStart, existingBookingEnd, newBookingStart, newBookingEnd) => {
      if (newBookingStart >= existingBookingStart && newBookingStart < existingBookingEnd || 
        existingBookingStart >= newBookingStart && existingBookingStart < newBookingEnd) {
        console.log("clash")
        throw new Error(
          `Booking could not be saved. There is a clash with an existing booking from ${moment(existingBookingStart).format('HH:mm')} to ${moment(existingBookingEnd).format('HH:mm on LL')}`
        )
      }
      console.log("no clash")
      return false
    }
    
    // Locate the space document containing the bookings   
    return Space.findById(spaceId)
      .then(space => {
        
        //Loop through each existing booking and return false if there is a clash
        return space.bookings.every(booking => {
          
          // Convert existing booking Date objects into number values
          let existingBookingStart = new Date(booking.bookingStart).getTime()
          let existingBookingEnd = new Date(booking.bookingEnd).getTime()          
          // Check whether there is a clash between the new booking and the existing booking
          return !clashesWithExisting(
            existingBookingStart, 
            existingBookingEnd, 
            newBookingStart, 
            newBookingEnd
          )
        })
      })
  }, ` Booking {VALUE} already exist`)
  
  // schema is empty for now
const spaceSchema = Schema({
    spaceType: String,  // bed,conference,events etc.
    category: String,
    owner_id: {type: mongoose.Schema.Types.ObjectId, required: true,  ref: 'User' },
    details: {
        name: {type: String, required: true},
        capacity: {type: String},
        img: {type: [String], required: true},
        location: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true},
        capacity: {type: Number}        
    },
    assets: {
        wifi: {type: Number, required: true},        
        projector: {type: Number, required: true},
        tv: {type: Number, required: true},       
        breakfast: {type: Number, required: true},
        whiteBoard:{type: Number, required: true}
      },
      bookings: [bookingSchema],
     

});



const Space = (module.exports = mongoose.model("Space", spaceSchema))