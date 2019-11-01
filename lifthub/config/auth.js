const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    User = require("../model/users"),
    keys = require("../config/keys");

    module.exports = (passport)=>{
        const opts = {}
        opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
        opts.secretOrKey = keys.secret;
        passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
            User.findOne({id: jwt_payload.sub}, function(err, user) {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                    // or you could create a new account
                }
            });
        }));
    }

    