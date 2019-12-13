const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
require("../config/auth")(passport);
const jwt = require("jsonwebtoken");
const keys = require("../config/keys")
const router = express.Router();
const Space = require("../model/space");
const User = require("../model/users");
const request = require("superagent");
const nodemailer = require("nodemailer");
const googleMapsClient = require("@google/maps").createClient({
  key: process.env.GEOCODE
});
const moment = require("moment");
const momentTimezone = require("moment-timezone");
//console.log(process.env.SECRET);
// Function to convert UTC JS Date object to a Moment.js object in WAT – West Africa Time
const dateWAT = date => {
  //return momentTimezone(date).tz(Africa/Lagos)
  return moment.tz(date, "Africa/Lagos").toDate();
};
// Function to calculate the duration of the hours between the start and end of the booking
const durationHours = (bookingStart, bookingEnd) => {
  // convert the UTC Date objects to Moment.js objeccts
  // console.log("bookings")
  // console.log(bookingStart)
  // console.log(bookingEnd)
  let startDateLocal = moment(dateWAT(bookingStart));
  let endDateLocal = moment(dateWAT(bookingEnd));

  // calculate the duration of the difference between the two times
  let difference = moment.duration(endDateLocal.diff(startDateLocal));
  let hours = parseInt(difference.asHours());

  // duration in minutes
  let minutes = parseInt(difference.asMinutes());
  // return the difference in decimal format
  // console.log("difference")
  // console.log(hours)
  // console.log(minutes)
  // console.log( hours + minutes / 60)
  return hours + minutes / 60;
};
router.get("/space/locate", (req, res) => {
  console.log(process.env.GEOCODE);
  const lat = req.query.lat;
  const lng = req.query.lng;
  googleMapsClient.reverseGeocode(
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
// get by location & spaceType
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
// get by spaceType
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
// GET ITEMS
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

/*
POST REQUEST
SIGNUP, LOGIN & POST SPACE
*/
router.post("/signup", (req, res) => {
  console.log(JSON.stringify(req.body.email));
  if (!req.body.email || !req.body.password) {
    res.json({
      success: false,
      message: "Email and password are required!!"
    });
  } else {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password
    });
    newUser.save(err => {
      if (err) {
        return res
          .status(401)
          .json({ success: false, message: "Email already exist!!" });
      }
      res.json({
        success: true,
        message: "User created!!"
      });
    });
  }
});

//LOGIN
router.post("/login", (req, res) => {
  const email = { email: req.body.email };
  const pwd = req.body.password;
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) {
      throw err;
    }
    if (!user) {
      res.status(401).send({ success: false, message: "User does not exist" });
    } else {
      console.log(user);
      console.log(process.env.SECRET);
      user.comparePassword(pwd, function(err, match) {
        if (match && !err) {
          let token = jwt.sign(user.toJSON(), process.env.SECRET,{expiresIn:'24hr'});
          res.json({success: true, token:'JWT '+token});
        } else {
          res
            .status(401)
            .send({ success: false, message: "Incorrect password!!" });
        }
      });
    }
  });
});

// POST NEW SPACE
router.post(
  "/space",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const token = getToken(req.header);
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
// GET BY ID
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

// UPDATE ITEM
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
    const token = getToken(req.headers);      
    if (token) {
      if (req.body.recurring.length === 0) {
        Space.findByIdAndUpdate(
          id,
          {
            $addToSet: {
              bookings: {
                user: req.user._id,
                // The hour on which the booking starts, calculated from 12:00AM as time = 0
                startHour: dateWAT(req.body.bookingStart),
                // The duration of the booking in decimal format
                duration: durationHours(
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
        firstBooking.startHour = dateWAT(req.body.bookingStart);

        firstBooking.duration = durationHours(
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
        res
        .status(403)
        .json({ success: false, message: "Please login or signup" });
    }
  }
);

router.delete("/book/:id", (req, res) => {
  console.log(req.body);
  const { id, bookingId } = req.body;
  console.log(id);
  console.log(bookingId);
  Space.findByIdAndUpdate(
    id,
    { $pull: { bookings: { _id: bookingId } } },
    { new: true }
  )
    .then(space => {
      console.log("deleted");
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
