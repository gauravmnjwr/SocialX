const { render } = require('ejs');
const User = require('../models/user');

module.exports.profile= function(req,res){
  // console.log(req.cookies.username)

  // 1
  if(req.cookies.user_id){
    User.findById(req.cookies.user_id,function(err,user){
      if(user){
        return res.render('profile',{
          title:"User Profile",
          user:user
        })
      }
      return res.redirect('/users/sign_in');
    });
  }
  else{
    return res.redirect('/users/sign_in');
  }



  // 2
  // if(!req.cookies.user_id){
  //   return res.render('sign_in',{
  //     title:"Codial Sign Up"
  //   })
  // }
  // return res.render('profile',{
  //   title:"ProfilePageYo",
  //   currname:req.cookies.username,
  //   curremail:req.cookies.email
  // });
}

module.exports.usermain = function(req,res){
  res.end('<h1>USERS FETCHED</h1>');

}

module.exports.signIn=function(req,res){
  // console.log(req.body);
  return res.render('sign_in',{
    title:"Codial Sign In"
  })
}

module.exports.signUp=function(req,res){
  // console.log(req.body);
  return res.render('sign_up',{
    title:"Codial Sign Up"
  })
}



module.exports.create=function(req,res){
  //TODO Later
  if(req.body.password != req.body.confirm_password){
    return res.redirect('back');
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
          return;

        }
        return res.redirect('/users/sign_in');
      });
    }
    else{
      return res.redirect('back');
    }
  })
  

}

module.exports.createSession=function(req,res){
  //TODO Later

  //findUser

  User.findOne({email:req.body.email},function(err,user){
    if(err){
      console.log("Error in finding user in signing in");
      return;
    }

  //if user is found 

    if(user){
      if(user.password!=req.body.password){
        return res.redirect('back');
      }
    }

    //handle session creation 
    res.cookie('user_id',user.id);
    console.log(user);
    // res.cookie('username',user.name);
    // res.cookie('email',user.email);
    return res.redirect('/users/profile');
  })
}

module.exports.end=function(req,res){
  res.clearCookie('user_id');
  // return res.render('sign_in',{
  //   title:"profile"
  // });
  return res.redirect('back');
}
