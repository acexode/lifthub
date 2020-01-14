const express = require("express");
const passport = require("passport");
require("../config/auth")(passport);
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/users");

/*
POST REQUEST
SIGNUP, LOGIN & POST SPACE
*/
router.get("/users", (req, res) => {
  User.find((err, users) => {
    if (err) {
      return next(err);
    } else {
      if (!users) {
        res.json({ success: false, message: "no user" });
      } else {
        res.json({ success: true, users });
      }
    }
  });
});
router.post("/signup", (req, res) => {
  console.log(JSON.stringify(req.body.email));
  if (!req.body.email ||  !req.body.username || !req.body.password) {
    res.json({
      success: false,
      message: "Email, username, and password are required!!"
    });
  } else {
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
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
  const username = { email: req.body.username };
  const pwd = req.body.password;
  User.findOne({ username: req.body.username }, function(err, user) {
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






module.exports = router;
