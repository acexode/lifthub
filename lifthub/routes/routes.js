const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("../config/keys");
const jwt = require("jsonwebtoken");
require("../config/auth")(passport)
const router = express.Router()
const Space = require("../model/space")
const User = require("../model/users")

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
// get by location
router.get('/spaces', (req, res) => {
    var space = req.query.space
    var location = req.query.location
    
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
router.post("/space",passport.authenticate('jwt',{session:false}), (req,res)=>{
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

module.exports = router