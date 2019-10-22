const express = require("express");
const mongoose = require("mongoose")
const router = express.Router()
const LiftHub = require("../model/lifthub")

// GET ITEMS
router.get("/", (req,res)=>{
    // TODOS
    res.send("Hello world")
})

// GET BY ID
router.get("/:id", (req,res)=>{
    // later
})

// POST ITEM
router.post("/", (req,res)=>{
    // TODO
})

// UPDATE ITEM
router.put("/", (req,res)=>{
    // TODO
})

// DELETE ITEM
router.delete("/", (req,res)=>{
    // TODO
})

module.exports = router