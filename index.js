const express= require('express');
const cookieParser= require('cookie-parser');
const expressLayouts=require('express-ejs-layouts');
const port=8000; // 80 as in default production server
const app= express();
const db=require('./config/mongoose');




app.use(express.urlencoded());

//calling cookie parser
app.use(cookieParser());

app.use(expressLayouts);

app.use(express.static('./assets'));

//extracting script and styles
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.use('/',require('./routes'));


app.post('/sign_in',function(req,res){
  console.log(req.body);
})
app.post('/sign_up',function(req,res){
  console.log(req.body);
})


//setting  up view engine
app.set('view engine','ejs');
app.set('views','./views');


app.post('/sign_in',function(req,res){
  console.log(req.body);
})
app.post('/sign_up',function(req,res){
  console.log(req.body);
})
app.listen(port,function(err){
  if(err){
    console.log(`Error: ${err}`);
  }
  console.log(`Server is Up and Running on port: ${port}`);
})