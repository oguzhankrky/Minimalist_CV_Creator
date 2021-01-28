const path=require("path");
const express =require('express');




module.exports.try=function(req,res) {
   
    res.render("mainPage");

  }
  

  module.exports.about=function(req,res) {
    
    const message="Hello";

       res.render("About",{
        
         deneme:message
       });

  }









