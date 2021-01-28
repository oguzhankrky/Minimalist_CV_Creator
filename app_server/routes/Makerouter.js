var express =require('express');
var router = express.Router();

var con=require('../Controller/appController4');

router.get('',con.make);
router.post('/',con.makesave);




module.exports = router;