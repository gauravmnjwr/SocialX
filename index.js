const express= require('express');

const port=8000; // 80 as in default production server
const app= express();

app.use('/',require('./routes'));

app.listen(port,function(err){
  if(err){
    console.log(`Error: ${err}`);
  }
  console.log(`Server is Up and Running on port: ${port}`);
})