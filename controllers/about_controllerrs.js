module.exports.about=function(req,res){
  res.render('about',{
    title:"ABOUT",
    sectionname:"THIS IS ABOUT"
  })
}

module.exports.mine= function(req,res){
  res.end('<h1>Yayyy Mine</h1>')
}