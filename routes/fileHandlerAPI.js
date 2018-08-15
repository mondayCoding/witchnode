const express = require('express');
const router = express.Router();
const formidable = require("formidable");
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

// NOTE : this is for parsing regular FormData type file post
router.post('/', function(req, res, next) {
   console.log(chalk.green("Image upload recived"));
   
   var form = new formidable.IncomingForm({
      uploadDir:path.join(__dirname, 'temp')
   });

   form.parse(req, function (err, fields, files) {
      for (file of files) {
         var oldpath = file.path;
         var newpath = path.join(__dirname, 'temp/') + file.name;
         console.log(chalk.green(oldpath));
         console.log(chalk.green(newpath));
   
         fs.rename(oldpath, newpath, function (err) {
           if (err) throw err;
         });         
      }      
   });

   res.status(200).send("recieved");
});


// TODO : Json based Base64 version of previous method to allow full JSON-API

module.exports = router;
