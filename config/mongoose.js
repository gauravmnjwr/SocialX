const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/codial_development'); 

const db= mongoose.connection;


db.on('error',console.error.bind(console,"ERROR CONNECTING TO DB"));


db.once('open',function(){
  console.log("Connected to DB");
});

module.exports=db;
