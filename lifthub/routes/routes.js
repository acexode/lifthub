const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("../config/keys");
const jwt = require("jsonwebtoken");
require("../config/auth")(passport)
const router = express.Router()
const Space = require("../model/space")
const User = require("../model/users")
const request = require('superagent');
const nodemailer = require('nodemailer');
const googleMapsClient = require('@google/maps').createClient({
    key: keys.geocode
  });


  router.get("/locate",(req,res)=>{
    const lat = req.query.lat
    const lng = req.query.lng
    googleMapsClient.reverseGeocode({
        latlng: [lat,lng]
    },(err,data)=>{
        if(err){
            res.json({ success: false, message: err.json() })
            console.log(err)
        } else {
            // user_city & user_country filter the results for the city name and country
            var user_city = data.json.results[0].address_components.filter(ac=>~ac.types.indexOf('locality'))[0].long_name
            var user_country = data.json.results[0].address_components.filter(ac=>~ac.types.indexOf('country'))[0].long_name
            var fullLocation = `${user_city}, ${user_country}`
            // case insensitive with RegEx           
            var location = new RegExp(user_city, 'i')
            Space.find({'details.location': location}, {}, (err, space) => {
                if (err) {
                    res.json({ success: false, message: err })
                } else {
                    if (!space) {
                        res.json({ success: false, message: 'no space' })
                    } else {
                        res.json({ success: true, space: space, fullLocation  });
                    }
                }
            })
            
            
        }
    }) 
  })
// GET ITEMS
router.get("/space",(req,res)=>{  
        
        Space.find((err,space)=>{
            if(err){
                return next(err)
            }else{
                if (!space) {
                    res.json({ success: false, message: 'no space' })
                } else {
                    res.json({ success: true, space: space })
                } 
            }
        })
   
})


// GET BY ID
router.get('/space/:id', (req, res) => {
    var params = req.params.id
    Space.findOne({ _id: params }, {}, (err, space) => {
        if (err) {
            res.json({ success: false, message: err })
        } else {
            if (!space) {
                res.json({ success: false, message: 'no space' })
            } else {
                res.json({ success: true, space: space })
            }
        }
    })
});
// get by location & spaceType
router.get('/search', (req, res) => {
    var space = new RegExp(req.query.space, 'i')
    var location =new RegExp(req.query.location, 'i')   
    Space.find({ 'spaceType':space,'details.location': location}, {}, (err, space) => {
        if (err) {
            res.json({ success: false, message: err })
        } else {
            if (!space) {
                res.json({ success: false, message: 'no space' })
            } else {
                res.json({ success: true, space: space })
            }
        }
    })
});
// get by spaceType
router.get('/spacetype', (req, res) => {
    var space = new RegExp(req.query.space, 'i')   
    Space.find({ 'spaceType': space}, {}, (err, space) => {
        if (err) {
            res.json({ success: false, message: err })
        } else {
            if (!space) {
                res.json({ success: false, message: 'no space' })
            } else {
                res.json({ success: true, space: space })
            }
        }
    })
});


/*
POST REQUEST
SIGNUP, LOGIN & POST SPACE
*/
router.post("/signup", (req,res)=>{
    console.log(JSON.stringify(req.body.email))
    if(!req.body.email || !req.body.password){
        res.json({
            success:false,
            message: "Email and password are required!!"
        })
    }else{
        const newUser = new User({
            email:req.body.email,
            password:req.body.password
        })
        newUser.save(err=>{
            if(err){               
              return  res.status(401).json({ success:false,message: "Email already exist!!"})
            }
            res.json({
                success:true,
                message: "User created!!"
            })
        })
    }
})

//LOGIN
router.post("/login",(req,res)=>{
    const email = {email:req.body.email}
    const pwd = req.body.password    
    User.findOne({'email':req.body.email},function(err,user){        
        if(err){
            throw err
        }
        if(!user){
            res.status(401).send({success:false,message:"User does not exist"})
        }else{
            console.log(user)            
            user.comparePassword(pwd,function(err,match){
                if(match && !err){
                    let token = jwt.sign(user.toJSON(),keys.secret);
                    res.json({success:true,token:`JWT ${token}`})
                }else{
                    res.status(401).send({success:false,message:"Incorrect password!!"})
                }
            })
        }
    })
})

// POST NEW SPACE
router.post("/newspace",passport.authenticate('jwt',{session:false}), (req,res)=>{
    const token = getToken(req.header)
    if(token){
        const newSpace = new Space({
            spaceType: req.body.type,
            details:{                
                name: req.body.name,
                img: req.body.img,
                location: req.body.location,
                description: req.body.description,
                price: req.body.price,
                availability: req.body.availability,
            } 
           
        })
        console.log(newSpace)        
        newSpace.save(err=>{
            if(err){
                res.json({success:false,message:"failed to create new space"})
                
            }else{
                res.json({success:true,message:"New space created"}) 
            }
        })
    }else{
        res.status(403).json({success:true,message:"You dont have admin priviledges"})
    }
})

// UPDATE ITEM
router.put("/:id", (req,res)=>{
    const id = req.params.id;
    Space.findOne({_id:id},{},(err,space)=>{
        if(err){
            res.json({success:false, message:err})
        }else{
            if(!space){
                res.json({success:false,message:"space not found"})
            }else{
                space.spaceType = req.body.type
                space.details.name = req.body.name
                space.details.img = req.body.img
                space.details.location = req.body.location
                space.details.description = req.body.description
                space.details.price = req.body.price
                space.details.availability = req.body.availability
                space.save((err) => {
                    if (err) {
                        res.json({ success: false, message: err })
                    } else {
                        res.json({ success: true, message: 'post updated' })
                    }
                })
            }
        }
    })
})

// DELETE ITEM
router.delete('/space/:id', (req, res) => {
    const params = req.params.id
    Space.findByIdAndRemove({ _id: params }, {}, (err, posts) => {
        if (err) {
            res.json({ success: false, message: 'Invalid Id' })
        } else {
            res.json({ success: true, message: 'space removed' })
        }
    })
});
// subscribe to newsletter
router.post('/subscribe',(req,res)=>{
    console.log(req.body)
    request
        .post('https://' + keys.mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + keys.listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + keys.mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': req.body.subscribeFormEmail,
          'status': 'subscribed',
          'merge_fields': {
            'FNAME': req.body.subscribeFormName,            
          }
        })
            .end(function(err, response) {
              if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.json({ success: true, message: 'Signed up' })
              } else {
                res.json({ success: false, message: 'Signed up failed !!' })
              }
          });
})
// TOKEN DISPATCHER
const getToken = headers=>{
    if(headers && headers.authorization){
        let parts = headers.authorization.split(" ");
        if(parts.length ===2){
            return parts[1]
        }else{
            return null
        }
    }else{
        return null;
    }
}
// post send availability message
router.post("/email", (req,res)=>{
    const {name,email,phone,msg} = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: keys.email,
          pass: keys.password
        },
        tls: {
            rejectUnauthorized: false
        }
      });
    const mailOptions = {
        from: email,
        to: keys.email,
        subject: msg,
        text: `Hi my name is ${name}, i am interested in the space property, please call me on 
        this number ${phone} or email me via ${email}`
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.json({success: false, msg: error.message});
           console.log(error)
           console.log(error.message)
        } else {
          res.json({success: true, msg: info.response});
        }
      });
      
})
  


module.exports = router