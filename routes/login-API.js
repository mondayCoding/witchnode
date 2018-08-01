
//*****************REQUIRES***************************

var express = require('express');
var validator = require('validator');

var router = express.Router();


//***************************API (SOON)*****************************

var allowedUsers = [
   {username:"admin",   password: "admin",   authorizationLvl: 0},
   {username:"dev",     password: "dev",     authorizationLvl: 1},
];


//********************SOON**************************************


router.post('/', function(req, res, next) {
   const username = (req.body.username).trim();
   const password = (req.body.password).trim();
   const isNotEmpty = !validator.isEmpty(username) && !validator.isEmpty(password);

	if (isNotEmpty) {
      user = allowedUsers.find(user => user.username === username)
      
      if (user && user.password === password) {
         res.status(200).send({level: user.authorizationLvl});         
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
