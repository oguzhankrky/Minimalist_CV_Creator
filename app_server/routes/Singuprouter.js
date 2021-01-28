const express =require('express');
const router = express.Router();

const con=require('../Controller/appController3');

router.get('/',con.Singup);
router.post('/',con.SingupSave);

module.exports = router;