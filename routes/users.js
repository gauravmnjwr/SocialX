const express= require('express');

const router = express.Router();

const usersController = require('../controllers/user_controllers');

router.get('/',usersController.usermain);
router.get('/profile',usersController.profile);
router.get('/sign_in',usersController.signIn);
router.get('/sign_up',usersController.signUp);

//post requests for sign in and sign up

router.post('/create',usersController.create);

module.exports=router;