const express = require("express");
const Payment = require('../model/payment')
const router = express.Router();
const helper = require('../helper/helper');
const jwt = require("jsonwebtoken");
router.post('/transactions', function (req, res, next) {
  const token = helper.getToken(req.headers);  
  jwt.verify(token,process.env.SECRET,(err,user)=>{
    console.log(user);
    const payments = new Payment({
        amount: req.body.amount,
        spaceId:  req.body.spaceId,
        customer: user._id,
        name: req.body.name,
        bookingStart : req.body.bookingStart,
        bookingEnd : req.body.bookingEnd,
        owner: req.body.owner,
        txref : req.body.txref
    })
    console.log(payments);
    payments.save(err => {
        if (err) {
          console.log(err)
          res.json({ success: false, message: "failed to save transaction" });
        } else {
          res.json({ success: true, message: "Transaction saved" });
        }
      });
    })
});

router.get('/payments', function(req,res,next){
  const token = helper.getToken(req.headers);  
  jwt.verify(token,process.env.SECRET,(err,user)=>{
    console.log(user);
    Payment.find({'owner': user._id}, (err, payments) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!payments) {
          res.json({ success: false, message: "no payment" });
        } else {
          console.log(payments[0]);
          res.json({ success: true, payments: payments });
        }
      }
    });
  })
})

module.exports = router