
//*****************REQUIRES***************************

var express = require('express');
var mongoose = require('mongoose');
var validator = require('validator');

var router = express.Router();


//********************USERFORM API**************************************

router.post('/userform', function(req, res, next) {
   if (req.body.form.username !== null && req.body.form.username !== ""
      && validator.isNumeric(req.body.form.accountNum) && validator.isEmail(req.body.form.email)
      && req.body.form.accountNum !== null && req.body.form.accountNum !== ""){
      res.send(`Thank you for your personal infromation ${req.body.form.username}. ❤️ With love from Nigerian Prince`);
   } else {
      res.status(400).send("You forgot to fill in VALID bank account and/or username");
   }
});


module.exports = router;
