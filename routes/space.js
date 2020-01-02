const express = require("express");
const passport = require("passport");
require("../config/auth")(passport);
const router = express.Router();
const Space = require("../model/space");
const request = require("superagent");
const helper = require('../helper/helper')
const jwt = require("jsonwebtoken");
const moment = require("moment");
const momentTimezone = require("moment-timezone");


// Get space based om location
router.get("/space/locate", (req, res) => {
  console.log(process.env.GEOCODE);
  const lat = req.query.lat;
  const lng = req.query.lng;

  helper.googleMapsClient.reverseGeocode(
    {
      latlng: [lat, lng]
    },
    (err, data) => {
      if (err) {
        res.json({ success: false, message: err.json() });
        console.log(err);
      } else {
        // user_city & user_country filter the results for the city name and country
        var user_city = data.json.results[0].address_components.filter(
          ac => ~ac.types.indexOf("locality")
        )[0].long_name;
        var user_country = data.json.results[0].address_components.filter(
          ac => ~ac.types.indexOf("country")
        )[0].long_name;
        var fullLocation = `${user_city}, ${user_country}`;
        // case insensitive with RegEx
        var location = new RegExp(user_city, "i");
        Space.find({ "details.location": location }, {}, (err, space) => {
          if (err) {
            res.json({ success: false, message: err });
          } else {
            if (!space) {
              res.json({ success: false, message: "no space" });
            } else {
              res.json({ success: true, space: space, fullLocation });
            }
          }
        });
      }
    }
  );
});

// Get by location & spaceType
router.get("/space/search", (req, res) => {
  var space = new RegExp(req.query.space, "i");
  var location = new RegExp(req.query.location, "i");
  console.log(space);
  Space.find(
    { spaceType: space, "details.location": location },
    {},
    (err, space) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!space) {
          res.json({ success: false, message: "no space" });
        } else {
          res.json({ success: true, space: space });
        }
      }
    }
  );
});

// Get by spaceType
router.get("/space/type", (req, res) => {
  var space = new RegExp(req.query.spaceType, "i");
  console.log("spacetype: " + req.query.spaceType);
  Space.find({ spaceType: space }, {}, (err, space) => {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      if (!space) {
        res.json({ success: false, message: "no space" });
      } else {
        res.json({ success: true, space: space });
      }
    }
  });
});

// Get all space
router.get("/space", (req, res) => {
  Space.find((err, space) => {
    if (err) {
      return next(err);
    } else {
      if (!space) {
        res.json({ success: false, message: "no space" });
      } else {
        res.json({ success: true, space: space });
      }
    }
  });
});


// Post new space
router.post("/space",passport.authenticate("jwt", { session: false }),(req, res) => {
    const token = helper.getToken(req.header);
    if (token) {
      const newSpace = new Space({
        spaceType: req.body.type,
        details: {
          name: req.body.name,
          img: req.body.img,
          location: req.body.location,
          description: req.body.description,
          price: req.body.price
        },
        assets: {
          wifi: req.body.wifi,
          projector: req.body.projector,
          tv: req.body.tv,
          breakfast: req.body.breakfast,
          whiteBoard: req.body.whiteBoard
        }
      });
      console.log(newSpace);
      newSpace.save(err => {
        if (err) {
          res.json({ success: false, message: "failed to create new space" });
        } else {
          res.json({ success: true, message: "New space created" });
        }
      });
    } else {
      res
        .status(403)
        .json({ success: true, message: "You dont have admin priviledges" });
    }
  }
);

// Get space by id
router.get("/space/:id", (req, res) => {
  var params = req.params.id;
  Space.findOne({ _id: params }, {}, (err, space) => {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      if (!space) {
        res.json({ success: false, message: "no space" });
      } else {
        res.json({ success: true, space: space });
      }
    }
  });
});
// Get user
router.get("/user",(req,res)=>{
    const token = helper.getToken(req.headers);  
    var ObjectId = require('mongoose').Types.ObjectId;    
    jwt.verify(token,process.env.SECRET,(err,user)=>{ 
            
      Space.find({'bookings.user': user._id }, {}, (err, space) => {       
        if (err) {
          res.json({ success: false, message: err });
        } else {
          if (!space) {
            res.json({ success: false, message: "user has no booking" });
          } else {            
            res.json({ success: true, space, user });
          }
        }
      });
    });   
  
});
// Update space
router.put("/:id", (req, res) => {
  const id = req.params.id;
  Space.findOne({ _id: id }, {}, (err, space) => {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      if (!space) {
        res.json({ success: false, message: "space not found" });
      } else {
        space.spaceType = req.body.type;
        space.details.name = req.body.name;
        space.details.img = req.body.img;
        space.details.location = req.body.location;
        space.details.description = req.body.description;
        space.details.price = req.body.price;
        space.save(err => {
          if (err) {
            res.json({ success: false, message: err });
          } else {
            res.json({ success: true, message: "post updated" });
          }
        });
      }
    }
  });
});


// make booking
router.put("/book/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    const { id } = req.params;
    const token = helper.getToken(req.headers); 
   
    if (token) {
      if (req.body.recurring.length === 0) {
        Space.findByIdAndUpdate(
          id,
          {
            $addToSet: {
              bookings: {
                user: req.user._id,
                // The hour on which the booking starts, calculated from 12:00AM as time = 0
                startHour: helper.dateWAT(req.body.bookingStart),
                // The duration of the booking in decimal format
                duration: helper.durationHours(
                  req.body.bookingStart,
                  req.body.bookingEnd
                ),
                // Spread operator for remaining attributes
                ...req.body
              }
            }
          },
          { new: true, runValidators: true, context: "query" }
        )
          .then(space => {
            // send a reminder email
            helper.reminder(req.user.email,space.spaceType, helper.dateWAT(req.body.bookingStart),req.body.bookingEnd)
            res.status(201).json(space);
          })
          .catch(error => {
            res.status(400).json({ error });
          });
        // booking is recurring
      } else {
        // The first booking in the recurring booking range
        let firstBooking = req.body;
        firstBooking.user = req.user._id;
        firstBooking.startHour = helper.dateWAT(req.body.bookingStart);

        firstBooking.duration =  helper.durationHours(
          req.body.bookingStart,
          req.body.bookingEnd
        );

        // An array containing the first booking, to which all additional bookings in the recurring range will be added
        let recurringBookings = [firstBooking];

        // A Moment.js object to track each date in the recurring range, initialised with the first date
        let bookingDateTracker = momentTimezone(firstBooking.bookingStart).tz(
          "Africa/Lagos"
        );

        // A Moment.js date object for the final booking date in the recurring booking range - set to one hour ahead of the first booking - to calculate the number of days/weeks/months between the first and last bookings when rounded down
        let lastBookingDate = momentTimezone(firstBooking.recurring[0]).tz(
          "Africa/Lagos"
        );
        lastBookingDate.hour(bookingDateTracker.hour() + 1);

        // The number of subsequent bookings in the recurring booking date range
        let bookingsInRange =
          req.body.recurring[1] === "daily"
            ? Math.floor(lastBookingDate.diff(bookingDateTracker, "days", true))
            : req.body.recurring[1] === "weekly"
            ? Math.floor(
                lastBookingDate.diff(bookingDateTracker, "weeks", true)
              )
            : Math.floor(
                lastBookingDate.diff(bookingDateTracker, "months", true)
              );

        // Set the units which will be added to the bookingDateTracker - days, weeks or months
        let units =
          req.body.recurring[1] === "daily"
            ? "d"
            : req.body.recurring[1] === "weekly"
            ? "w"
            : "M";

        // Each loop will represent a potential booking in this range
        for (let i = 0; i < bookingsInRange; i++) {
          // Add one unit to the booking tracker to get the date of the potential booking
          let proposedBookingDateStart = bookingDateTracker.add(1, units);

          // Check whether this day is a Sunday (no bookings on Sundays)
          if (proposedBookingDateStart.day() !== 0) {
            // Create a new booking object based on the first booking
            let newBooking = Object.assign({}, firstBooking);

            // Calculate the end date/time of the new booking by adding the number of units to the first booking's end date/time
            let firstBookingEndDate = moment(firstBooking.bookingEnd).tz(
              "Africa/Lagos"
            );
            let proposedBookingDateEnd = firstBookingEndDate.add(i + 1, units);

            // Update the new booking object's start and end dates
            newBooking.bookingStart = proposedBookingDateStart.toDate();
            newBooking.bookingEnd = proposedBookingDateEnd.toDate();

            // Add the new booking to the recurring booking array
            recurringBookings.push(newBooking);
          }
        } 

        // Find the relevant space and save the bookings
        Space.findByIdAndUpdate(
          id,
          {
            $push: {
              bookings: {
                $each: recurringBookings
              }
            }
          },
          { new: true, runValidators: true, context: "query" }
        )
          .then(space => {
            // send a reminder email
            helper.reminder(req.user.email,space.spaceType, helper.dateWAT(req.body.bookingStart),req.body.bookingEnd)
            res.status(201).json(space);
          })
          .catch(error => {
            console.log(error.errors.bookings.errors.bookingStart.message)
            if(error.errors.bookings.errors.bookingStart.message){
              res.status(400).json({ error: error.errors.bookings.errors.bookingStart.message });

            }
            res.status(400).json({ error });
          });
      }
    } else {
        res.status(403).json({ success: false, message: "Please login or signup" });
    }
  }
);

router.delete("/book/:id", (req, res) => {
  console.log('req.body');
  console.log(req.body);
  const {spaceId,bookingId } = req.body;
  const params = req.params.id;
  console.log(params);
  console.log(bookingId);
  Space.findByIdAndUpdate(
    spaceId,
    { $pull: { bookings: { _id: bookingId } } },
    { new: true }
  )
    .then(space => {
      console.log("deleted");
      console.log(space)
      res.status(201).json(space);
    })
    .catch(error => {
      res.status(400).json({ error });
    });
});
// DELETE ITEM
router.delete("/space/:id", (req, res) => {
  const params = req.params.id;
  Space.findByIdAndRemove({ _id: params }, {}, (err, posts) => {
    if (err) {
      res.json({ success: false, message: "Invalid Id" });
    } else {
      res.json({ success: true, message: "space removed" });
    }
  });
});

// subscribe to newsletter
router.post("/subscribe", (req, res) => {
  console.log(req.body);
  request
    .post(
      "https://" +
        process.env.mailchimpInstance +
        ".api.mailchimp.com/3.0/lists/" +
        process.env.listUniqueId +
        "/members/"
    )
    .set("Content-Type", "application/json;charset=utf-8")
    .set(
      "Authorization",
      "Basic " +
        new Buffer("any:" + process.env.mailchimpApiKey).toString("base64")
    )
    .send({
      email_address: req.body.subscribeFormEmail,
      status: "subscribed",
      merge_fields: {
        FNAME: req.body.subscribeFormName
      }
    })
    .end(function(err, response) {
      if (
        response.status < 300 ||
        (response.status === 400 && response.body.title === "Member Exists")
      ) {
        res.json({ success: true, message: "Signed up" });
      } else {
        res.json({ success: false, message: "Signed up failed !!" });
      }
    });
});



// post send availability message
router.post("/email", (req, res) => {
  const { name, email, phone, msg } = req.body;
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
    from: email,
    to: process.env.EMAIL,
    subject: msg,
    text: `Hi my name is ${name}, i am interested in the space property, please call me on 
        this number ${phone} or email me via ${email}`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.json({ success: false, msg: error.message });
      console.log(error);
      console.log(error.message);
    } else {
      res.json({ success: true, msg: info.response });
    }
  });
});


module.exports = router;
