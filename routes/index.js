const express= require('express');

const router= express.Router();

const homeController=require('../controllers/home_controllers');
router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/posts',require('./posts'))
router.use('/about',require('./about'));


console.log('router is working');

module.exports=router;