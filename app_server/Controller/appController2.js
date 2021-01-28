const path=require("path");
const express =require('express');
let message;




const Kullanıcı=require("../models/kullanici")
module.exports.loginci=function(req,res) {
   
    res.render("login");

  }
module.exports.logincipost=function(req,res) {
    console.log(req.body.Email);
    console.log(req.body.Password);
    Kullanıcı.findOne({Eposta: req.body.Email,Passport: req.body.Password},function(err,user){
      if(err)
      {
       
      }

      if(!user)
      {
        
        message=("Incorrect login made try again");
        res.render("login",  {message: message });
      }
      else
      {

      console.log("ok");
      message=(user.ad+" logged in successfully " );
      
      res.render("AfterSingin",  {message: message , change:1 });
      
      }


    });
    
   

  }
  







