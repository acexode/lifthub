const mongoose = require("mongoose");
const bycrypt = require("bcrypt-nodejs");

const walletSchema = mongoose.Schema({
    amount: Number,      
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
})
const paymentSchema = mongoose.Schema({
    amount: Number,
    spaceId:  { type: mongoose.Schema.ObjectId, ref: 'Space' },
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
})
const userSchema = mongoose.Schema({
    email:{
        type: String,
        unique:true,
        required:true
    },
    username:{
        type: String,
        unique:true,
        required:true
    },
    password:{
        type: String,        
        required:true
    },
    role: {
        type: String,
        default: 'basic',
        enum: ["basic", "admin"]
    },
    spaces: {
        type: mongoose.Schema.Types.ObjectId,        
        ref: "Space"
    },
    walletBalance: String
})



userSchema.pre("save", function(next){
    
    const user = this;
    if(this.isModified("password") ||this.isNew ){
        bycrypt.genSalt(10,function(err,salt){
            if(err){
                return next(err)
            }
            bycrypt.hash(user.password,salt,null,(err,hash)=>{
                if(err){
                    return next(err)
                }
                user.password = hash;
                next()
            })
        })
    }else{
        return next()
    }
});

userSchema.methods.comparePassword = function(pwd,next){    
    bycrypt.compare(pwd,this.password,function(err,result){        
        if(err){
            return next(err)
        }
        next(null,result)
    })
};
module.exports = mongoose.model("User",userSchema)


