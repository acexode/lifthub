const express = require("express");
const passport = require("passport");
require("../config/auth")(passport);
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/users");
const bcrypt = require("bcrypt-nodejs");
const crypto = require('crypto')
const google = require('./google')
const helper = require('../helper/helper'),
nodemailer = require('nodemailer');

/*
POST REQUEST
SIGNUP, LOGIN & POST SPACE
*/
async function mail(token, user, path){

  var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abudawud92@gmail.com',
      pass: ''
    }
  });
  var data = {
    to: user.email,
    from: 'abudawud92@gmail.com',
    subject: 'Password help has arrived!',
    context: {
      url: path+'/reset_password?token=' + token,
      name: user.username
    }
  };
  smtpTransport.sendMail(data, function(err, info) {
    if (!err) {
      console.log(info.response)
      return res.json({ message: 'Kindly check your email for further instructions' });
    } else {
      return console.log(err);
    }
  });
}
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

router.get('/google',
  google.authenticate('google', { scope:  [ 'profile' ]  }));

router.get('/google/callback',
  google.authenticate('google', {failureMessage : "User does not exist" }),
  function(req, res) {
    res.json('/');
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
      password: req.body.password,
      address: '',
      city: '',
      state:'',
      phone:'',
      role: "basic"
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
router.post('/reset_password', (req,res)=>{
  console.log(req.body.password)
  User.findOne({reset_password_token: req.body.token, reset_password_expires: {$gt: Date.now()}}, (err, user)=>{
    if(user){
      if(req.body.password){
        bcrypt.genSalt(10,function(err,salt){
          if(err){
              return err
          }
          bcrypt.hash(req.body.password,salt,null,(err,hash)=>{
              if(err){
                  return next(err)
              }
              User.findByIdAndUpdate({_id: user._id}, {password: hash, reset_password_token: null, reset_password_expires: null }, {upsert: true, new:true},(err, doc) =>{
                if (err) {
                  console.log(err)
                  return res.status(401).json({ success: false, message: err });
                }
                console.log(doc)
                res.json({ success: true, message: "Password updated !!"});
              })
          })
        })
      }else{
        res.json({
          success: false,
          message: "Password is required !!"
        });
      }
    }else{
      console.log('user')
      console.log(user)
      return res.status(400).send({
        message: 'Password reset token is invalid or has expired.'
      });
    }
  })
})
router.post("/forgot_password", (req,res)=>{
  console.log(req.body.path)
  console.log(req.body.email)
  if (!req.body.email) {
    res.json({
      success: false,
      message: "Email is required!!"
    });
  }else{
    User.findOne({ email: req.body.email }, function(err, user) {
      if (err) {
        throw err;
      }
      if (!user) {
        res.status(401).send({ success: false, message: "User does not exist" });
      }else{
          let token = ''
          crypto.randomBytes(20, function(err, buf){
            token = buf.toString('hex')
            console.log('token....')
            console.log(token)
            User.findByIdAndUpdate({_id: user._id}, {reset_password_token: token, reset_password_expires: Date.now() + 86400000 }, {upsert: true, new:true},(err, doc) =>{
              console.log(req.body.path+'/reset-password?token=' + token)
              mail(token, user, req.body.path).catch(console.error);

            })
          })

      }
  })

  }
})
router.put("/update-profile",(req,res)=>{
  const token = helper.getToken(req.headers);
  console.log(token);
  jwt.verify(token,process.env.SECRET,(err,user)=>{
    console.log(req.body)

    User.findByIdAndUpdate({_id: user._id}, req.body,{new: true}, (err, user) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          res.json({ success: false, message: "user not found" });
        } else {
          console.log(user)
          res.json({ success: true, user, message:'user sucessfully updated' });
        }
      }
    });
  });

});
router.get("/user-profile",(req,res)=>{
  const token = helper.getToken(req.headers);
  console.log(token);
  var ObjectId = require('mongoose').Types.ObjectId;
  jwt.verify(token,process.env.SECRET,(err,user)=>{
    console.log(user)

    User.find({_id: user._id}, {}).exec((err, user) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          res.json({ success: false, message: "user not found" });
        } else {
          console.log(user)
          res.json({ success: true, user });
        }
      }
    });
  });

});
router.post("/registerAdmin", (req, res) => {
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
      password: req.body.password,
      address: '',
      city: '',
      state:'',
      phone:'',
      role: "admin",

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
  const username = { username: req.body.username };
  const pwd = req.body.password;
  User.findOne({ username: req.body.username }, function(err, user) {
    if (err) {
      throw err;
    }
    if (!user) {
      res.status(401).send({ success: false, message: "User does not exist" });
    } else {
      // console.log(user);
      // console.log(process.env.SECRET);
      user.comparePassword(pwd, function(err, match) {
        console.log(pwd)
        console.log(match)
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
