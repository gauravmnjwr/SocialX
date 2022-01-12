module.exports.home=function(req,res){
  console.log(req.cookies);
  // res.cookie('user_idd',00);
  res.render('home',{
    title:"HOME"
  });
}

