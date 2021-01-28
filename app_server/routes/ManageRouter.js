const router1=require("./MainPagerouter");
const router2=require("./Loginrouter");
const router3=require("./Singuprouter");
const router4=require("./Makerouter");

module.exports=function(app)
{
    app.use('',router1);
    app.use('/login',router2);
    app.use('/Singup',router3);
    app.use('/login/makeCv',router4);
    
}
