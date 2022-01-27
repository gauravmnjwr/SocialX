const passport= require('passport');

const googleStrategy= require('passport-google-oauth').OAuth2Strategy;

const crypto= require('crypto');

const User= require('../models/user');



passport.use(new googleStrategy({
    clientID:"153006002677-6deht29q7a7s1mg738lug1hfcagksdo2.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"http://localhost:8000/users/auth/google/callback",
    
  },
  function(accessToken,refreshToken,profile,done){
    User.findOne({email:profile.emails[0].value}).exec(function(err,user){
      if(err){
        console.log('Error in Google Auth',err);
        return;
      }
      console.log(profile);

      if(user){
        return done(null,user);
      }
      else{
        User.create({
          name:profile.displayName,
          email:profile.emails[0].value,
          password:crypto.randomBytes(20).toString('hex')
        },function(err,user){
          if(err){
            console.log('Error in Creating User',err);
            return;
          }
          return done(null,user);
        });
      }
    });
  }
));


module.exports= passport;