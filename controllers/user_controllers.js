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
}

module.exports.createSession=function(req,res){
  //TODO Later
}
