const moment = require("moment");
const momentTimezone = require("moment-timezone");
const nodemailer = require("nodemailer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const googleMapsClient = require("@google/maps").createClient({
  key: process.env.GEOCODE
});



// Function to convert UTC JS Date object to a Moment.js object in WAT – West Africa Time
const dateWAT = date => {
    //return momentTimezone(date).tz(Africa/Lagos)
    return moment.tz(date, "Africa/Lagos").toDate();
};


// Function to calculate the duration of the hours between the start and end of the booking
const durationHours = (bookingStart, bookingEnd) => {
    // convert the UTC Date objects to Moment.js objeccts 
    let startDateLocal = moment(dateWAT(bookingStart));
    let endDateLocal = moment(dateWAT(bookingEnd));
  
    // calculate the duration of the difference between the two times
    let difference = moment.duration(endDateLocal.diff(startDateLocal));
    let hours = parseInt(difference.asHours());
  
    // duration in minutes
    let minutes = parseInt(difference.asMinutes());
    // return the difference in decimal format 
    return hours + minutes / 60;
};

// TOKEN DISPATCHER
const getToken = function (headers) { 
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

// send booking reminder email
function reminder(email,space,bookingStart,bookingEnd){ 
    console.log('email')
    console.log(email)
    console.log(process.env.EMAIL)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Booking',
      text: `Hi, Welcome to LiftHUb! Thank you for your interest in ${space}, your booking starts
      from ${bookingStart} to ${bookingEnd},
        if you have further inquiry please contact us at ${process.env.EMAIL}
          `
    };
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
        console.log(error.message); 
        
      } else {        
        console.log(info.response);
        
      }
    });
  }
  const location = (lat,lng) => {

  }
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
    });
    const Spacestorage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "space",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
    });
  module.exports = {
      reminder,
      dateWAT,
      durationHours,
      getToken,
      googleMapsClient,
      Spacestorage
  }
  