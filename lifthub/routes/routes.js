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
router.get("/space",passport.authenticate("jwt",{session:false}), (req,res)=>{
    const token = getToken(req.header)
    if(token){
        Space.find((err,space)=>{
            if(err){
                return next(err)
            }else{
                res.json(space) 
            }
        })
    }else{
        res.json({success:true,message:"You dont have admin priviledges"})
    }
})


// GET BY ID
router.get("/:id", (req,res)=>{
    // later
})

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
                console.log(err)
              return  res.json({ success:false,message: "Email already exist!!"})
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
    console.log(email)
    User.findOne(email,function(err,user){
        if(err){
            throw err
        }
        if(!user){
            res.send({success:false,message:"User does not exist"})
        }else{
            console.log(pwd)
            user.comparePassword(pwd,function(err,match){
                if(match && !err){
                    let token = jwt.sign(user.toJSON(),keys.secret);
                    res.json({success:true,token:`JWT ${token}`})
                }else{
                    res.send({
                        success:false,message:"Incorrect password!!"
                    })
                }
            })
        }
    })
})

// POST NEW SPACE
router.post("/space",passport.authenticate("jwt",{session:false}), (req,res)=>{
    const token = getToken(req.header)
    if(token){
        const newSpace = new Space({
            title: req.body.title,
            location: req.body.location,
            description: req.body.description,
            price: req.body.price,
            availability: req.body.availability,
        })
        newSpace.save(err=>{
            if(err){
                res.json({success:false,message:"failed to create new space"})
            }else{
                res.json({success:true,message:"New space created"}) 
            }
        })
    }else{
        res.json({success:true,message:"You dont have admin priviledges"})
    }
})

// UPDATE ITEM
router.put("/", (req,res)=>{
    // TODO
})

// DELETE ITEM
router.delete("/", (req,res)=>{
    // TODO
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

module.exports = router