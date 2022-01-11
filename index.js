const express= require('express');
const expressLayouts=require('express-ejs-layouts');

const port=8000; // 80 as in default production server
const app= express();
app.use(expressLayouts);

app.use(express.static('./assets'));

//extracting script and styles
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


app.use('/',require('./routes'));

//setting  up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
  if(err){
    console.log(`Error: ${err}`);
  }
  console.log(`Server is Up and Running on port: ${port}`);
})