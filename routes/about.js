const express= require('express');

const router= express.Router();

const aboutController= require('../controllers/about_controllerrs');

router.get('/',aboutController.about);
router.get('/mine',aboutController.mine);

module.exports= router;