const User = require('../models/user');
const Users= require('../models/user');

module.exports.profile= function(req,res){
  res.end('<h1>USER Profile FETCHED</h1>');
}

module.exports.usermain = function(req,res){
  res.end('<h1>USERS FETCHED</h1>');

}

module.exports.signIn=function(req,res){
  // console.log(req.body);
  res.render('sign_in',{
    title:"Codial Sign In"
  })
}

module.exports.signUp=function(req,res){
  // console.log(req.body);
  res.render('sign_up',{
    title:"Codial Sign Up"
  })
}

module.exports.create=function(req,res){
  //TODO Later
  if(req.body.password!=req.body.confirm_password){
    res.redirect('back');
  }
  User.findOne({email: req.body.email},function(err,user){
    if(err){
      console.log("Error in finding user in signing up");
      return;
    }
    if(!user){
      User.create(req.body,function(err,user){
        if(err){
          console.log("Error in creating user while signing up");
          return;;

        }
        return res.redirect('/users/sign_in');
      });
    }
    else{
      res.redirect('back');

    }
  })

}

module.exports.createSession=function(req,res){
  //TODO Later
}
