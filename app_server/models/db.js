const mongoose =require('mongoose');

mongoose.Promise=require('bluebird');

const mongodb='mongodb://localhost:27017/newdb';

mongoose.connect(mongodb,{useNewUrlParser: true, useUnifiedTopology: true},function(err)
{
    if(!err)
    {
            console.log("db was connected."+mongodb);
    }
    else if(err)
    {
            console.log("db was not connected");
    }
})