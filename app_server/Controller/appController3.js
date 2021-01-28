const path=require("path");
const express =require('express');




var Kullanıcı=require("../models/kullanici")
module.exports.Singup=function(req,res) {
   
    res.render("singup");

  }
  
  module.exports.SingupSave=function(req,res) {
      
    console.log(req.body);
   
    
    //console.log(req.body.Password);
    
    
    
    var yeniKullancı=new Kullanıcı(
    {
        ad:req.body.Name,
        soyad:req.body.Surname,
        Eposta:req.body.Email,
        Passport:req.body.Password
  
  
    }
      
  

  );

  console.log(yeniKullancı);
  


  yeniKullancı.save(function(err)
  {
    if(!err)
    {
      console.log("saved");
    }
  });
  
  
    res.render("singup");
  }
  







