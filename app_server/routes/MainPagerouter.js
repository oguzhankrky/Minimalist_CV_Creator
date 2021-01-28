const express =require('express');
const router = express.Router();

const con=require('../Controller/appController');

router.get('/',con.try);
router.get('/about',con.about);

module.exports = router;