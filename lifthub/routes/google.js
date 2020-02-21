var passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
var User = require('../model/users');

// passport.use(new GoogleStrategy({
//     clientID: "",
//     clientSecret: "",
//     callbackURL: "/api/google/callback"
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//        User.findOrCreate({ userid: profile.id }, { username: profile.displayName, userid: profile.id, email: profile.emails, role: "basic" }, function (err, user) {
//          return done(err, user);
//        });
//   }
// ));
// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//     providers.findById(id, function(err, user) {
//         done(err, user);
//     });

// });
module.exports = passport;