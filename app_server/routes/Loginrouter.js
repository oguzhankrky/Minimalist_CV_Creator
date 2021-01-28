const express =require('express');
const router = express.Router();

const con=require('../Controller/appController2');

router.get('/',con.loginci);
router.post('/',con.logincipost);

module.exports = router;