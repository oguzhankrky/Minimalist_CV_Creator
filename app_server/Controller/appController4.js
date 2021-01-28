const path=require("path");
const express =require('express');

module.exports.make=function(req,res) {
   
    res.render("makeCV",{ change:1 });

  }

  module.exports.makesave=function(req,res) {
   
      
  console.log(req.body);
       
       
     
  res.render("A4page",{ change:1, Name:req.body.Name,profilpicture:req.body.profilpicture , Surname:req.body.Surname, Birhtday:req.body.Birhtday,
    Position:req.body.Position,ShortBiography:req.body.ShortBiography, Github:req.body.Github, PhoneNumber:req.body.PhoneNumber,
    Email:req.body.Email,Linkedin:req.body.Linkedin, Skill1:req.body.Skill1
    , Skill2:req.body.Skill2, Skill3:req.body.Skill3, Skill4:req.body.Skill4,Workexperience1:req.body.Workexperience1
    ,Workexperience2:req.body.Workexperience2,Workexperience3:req.body.Workexperience3,Education:req.body.Education,Education2:req.body.Education2
    ,Language1:req.body.Language1 ,Language2:req.body.Language2 ,Language3:req.body.Language3 ,Hobies1:req.body.Hobies1,Hobies2:req.body.Hobies2
    ,Hobies3:req.body.Hobies3,Hobies4:req.body.Hobies4
  }); 
  console.log(req.body.profilpicture);
   }
    

  