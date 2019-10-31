const mongoose = require("mongoose");
const bycrypt = require("bcrypt-nodejs");

const userSchema = mongoose.Schema({
    email:{
        type: String,
        unique:true,
        required:true
    },
    password:{
        type: String,        
        required:true
    }
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

