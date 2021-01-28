const mongoose =require('mongoose');

var Schema=mongoose.Schema;

var kullanıcıSchema=new Schema(
    {
        ad: String,
        soyad: String,
        Eposta:{type:String,required:true},
        Passport:{type:String,required:true}


    },{collection:'user'}

);

var kullanici=mongoose.model("kullanici",kullanıcıSchema);

module.exports=kullanici;