const mongoose = require("mongoose");
const bycrypt = require("bcrypt-nodejs");


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
    address:{
        type: String,
        unique:true,
    },
    password:{
        type: String,
        required:true
    },
    state:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    reset_password_token: {
        type: String
      },
      reset_password_expires: {
        type: Date
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
        console.log(pwd)
        console.log(this.password)
        if(err){
            return next(err)
        }
        next(null,result)
    })
};
module.exports = mongoose.model("User",userSchema)
