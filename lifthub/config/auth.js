const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    dotenv = require('dotenv').config(),
    User = require("../model/users"),
    keys = require("../config/keys");

    
    module.exports = function(passport) {       
        var opts = {};
        opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("JWT");
        opts.secretOrKey = process.env.SECRET;        
        passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
            //console.log(opts.jwtFromRequest())
          User.findOne({id: jwt_payload.id}, function(err, user) {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            });
        }));
      };

    