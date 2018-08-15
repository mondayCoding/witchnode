
//*****************REQUIRES***************************

var express = require('express');
var validator = require('validator');

var router = express.Router();


//***************************API (SOON)*****************************

const devSettings = {
   position: "bottom-right",
   theme: "violet",
   scale: "default",
   language: "default"
}

const adminSettings = {
   position: "top-right",
   theme: "default",
   scale: "default",
   language: "default"
}

const userSettings = {
   position: "top-left",
   theme: "light",
   scale: "default",
   language: "default"
}

const allowedUsers = [
   {username:"admin",   password: "admin",   authorizationLvl: 0, settings:adminSettings},
   {username:"dev",     password: "dev",     authorizationLvl: 1, settings:devSettings},
   {username:"user",     password: "user",     authorizationLvl: 2, settings:userSettings},
];



//********************SOON**************************************


router.post('/', function(req, res, next) {
   const username = (req.body.username).trim();
   const password = (req.body.password).trim();
   const isNotEmpty = !validator.isEmpty(username) && !validator.isEmpty(password);

	if (isNotEmpty) {
      user = allowedUsers.find(user => user.username === username)
      
      if (user && user.password === password) {
         res.status(200).send({level: user.authorizationLvl, settings: user.settings, username: user.username});         
      } else {
         //generate validation
         const loginResponse = {
            username: (user) ? null : "Invalid username",
            password: "Invalid password",
            message: "Invalid credentials"
         }
         res.status(422).send(loginResponse);                  
      }
      
   }
   else {
      res.status(400).send({message:"Fields cant be empty"});
   }
});




module.exports = router;
