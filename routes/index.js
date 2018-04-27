
//*****************REQUIRES***************************

var express = require('express');
var mongoose = require('mongoose');
var validator = require('validator');
var connectionJSON = require('../.env.json');

var router = express.Router();

//****************DATABASE****************************


//connect to database
mongoose.connect(connectionJSON.mongo, (err) => {
   if (!err) console.log("mongo success");        
});

//creating schemas - data blueprints
var todoSchema = new mongoose.Schema({
   item:String
});

//create models
var Todo = mongoose.model('Todo', todoSchema);

// var itemOne = Todo({item: 'add item to database'}).save(function(err){
//    if (err) throw err;
//    console.log("item saved to database");
// });

//***************************API (MISSIONPAGE)*****************************

var soonlist = [
   {objective:"get milk", complete: false, createDate:new Date(), completeDate:null},
   {objective:"feed cats", complete: false, createDate:new Date(), completeDate:null},
   {objective:"learn about healthy life", complete: false, createDate:new Date(), completeDate:null},
   {objective:"go grab a drink", complete: false, createDate:new Date(), completeDate:null},
   {objective:"forget about healthy life", complete: false, createDate:new Date(), completeDate:null},
   {objective:"contemplate your life", complete: false, createDate:new Date(), completeDate:null},
   {objective:"existential crisis", complete: false, createDate:new Date(), completeDate:null},
];


var list = [
   {objective:"rivi1", complete: true, createDate:new Date(), completeDate:null},
   {objective:"rivi2", complete: true, createDate:new Date(), completeDate:null},
   {objective:"rivi3", complete: false, createDate:new Date(), completeDate:null},
   {objective:"rivi4", complete: false, createDate:new Date(), completeDate:null},
   {objective:"rivi5", complete: true, createDate:new Date(), completeDate:null},
   {objective:"rivi6", complete: true, createDate:new Date(), completeDate:null},
];

var messageHistory = [
   {user:"Admin", content:"Adding new features: xbox integration inc", timestamp:new Date(), userType: 1 },
   {user:"user", content:"timestamps are broken.....", timestamp:new Date(), userType: 2 },
   {user:"Admin", content:"hmn.... it's a feature", timestamp:new Date(), userType: 1 },
   {user:"user", content:"really... just like content leaking outside page?", timestamp:new Date(), userType: 2 },
   {user:"Admin", content:"yes", timestamp:new Date(), userType: 1 },
   {user:"user", content:"and master passwords being leaked via script?", timestamp:new Date(), userType: 2 },
   {user:"system", content:"user has been banned", timestamp:new Date(), userType: 0 }
];

//get current missionlist
router.get('/api/todo', function(req, res, next) {
   res.send(list);
});

//add new item to missionlist
router.put('/api/todo', function(req, res, next) {
   const addition = (req.body.objective).trim();
   if (!validator.isEmpty(addition) && validator.isLength(addition, {min:3, max: 64})) {
      const newMission = {
         objective: addition,
         complete:false,
         createDate: new Date(),
         completeDate: null
      };
      list.push(newMission);
      res.status(200).send(list);
   }
   else {
      res.status(400).send("Objective too long: max 64 characters allowed");
   }
});

//remove item from missionlist
router.delete('/api/todo', function(req, res, next) {
   list = list.filter( item => item.objective !== req.body.objective );
   res.send(list);
   console.log(`removed item: ${req.body.objective}`);
});

//update missionlist toggle
router.put('/api/todo/toggle', function(req, res, next) {
   const toggleVal = (req.body.objective).trim();

   if (!validator.isEmpty(toggleVal)) {

      list.forEach((item, i) => {
         if (item.objective === toggleVal ) {
            if (!list[i].complete) {
               list[i].complete = true;
               list[i].completeDate = new Date();
            } else {
               list[i].complete = false;
               list[i].completeDate = null;
            }
         }
      });
      res.status(200).send(list);
   }
   else {
      res.status(400).send();
   }
});

//********************SOON**************************************

router.get('/api/soon', function(req, res, next) {
   res.send(soonlist);
});

router.put('/api/soon', function(req, res, next) {
   const addition = (req.body.objective).trim();
   if (!validator.isEmpty(addition) && validator.isLength(addition, {min:3, max: 64})) {
      const newMission = {
         objective: addition,
         complete:false,
         createDate: new Date(),
         completeDate: null
      };
      soonlist.push(newMission);
      res.status(200).send(soonlist);
   }
   else {
      res.status(400).send("Task too long: max 64 characters allowed");
   }
});

//update missionlist toggle
router.put('/api/soon/toggle', function(req, res, next) {
   console.log(req.body.objective);

   const toggleVal = (req.body.objective).trim();

   if (!validator.isEmpty(toggleVal)) {

      soonlist.forEach((item, i) => {
         if (item.objective === toggleVal ) {
            if (!soonlist[i].complete) {
               soonlist[i].complete = true;
               soonlist[i].completeDate = new Date();
            } else {
               soonlist[i].complete = false;
               soonlist[i].completeDate = null;
            }
         }
      });
      res.status(200).send(soonlist);
   }
   else {
      res.status(400).send();
   }
});

router.delete('/api/soon', function(req, res, next) {
   var filteredlist = soonlist.filter( item => item.objective !== req.body.objective );
   soonlist = filteredlist;
   res.send(soonlist);
   console.log(`removing item ${req.body.objective} from soonlist`);
});

//********************MESSAGEHISTORY**************************************

router.get('/api/chathistory', function(req, res, next) {
   res.send(messageHistory);
});

//add new item to missionlist
router.put('/api/chathistory', function(req, res, next) {
   const addition = (req.body.message).trim();
   if (!validator.isEmpty(addition) && validator.isLength(addition, {min:2, max: 200})) {
      const newMessage = {
         user:"user",
         content:addition,
         timestamp:new Date(),
         userType: 2
      };
      messageHistory.push(newMessage);
      res.status(200).send(messageHistory);
   }
   else {
      if(!validator.isLength(addition, {min:3})) {
         res.status(400).send("minimum length for message is 2 characters");
      } else {
         res.status(400).send("max length for message is 200 characters");
      }
   }
});

//********************USERFORM**************************************

router.post('/api/userform', function(req, res, next) {
   if (req.body.form.username !== null && req.body.form.username !== ""
      && validator.isNumeric(req.body.form.accountNum) && validator.isEmail(req.body.form.email)
      && req.body.form.accountNum !== null && req.body.form.accountNum !== ""){
      res.send(`Thank you for your personal infromation ${req.body.form.username}. ❤️ With love from Nigerian Prince`);
   } else {
      res.status(400).send("You forgot to fill in VALID bank account and/or username");
   }
});

//************************ROUTING***************************

router.get('/', function(req, res, next) {
   res.render('index', { title: 'WitchNode | Welcome to the coven' });
});
router.post('/', function(req, res, next) {
   res.render('index', { title: 'Post: Success (' + req.body.task_name + ')' });
});
//catch all
router.get('*', function(req, res, next) {
   res.render('index', { title: 'WitchNode | Welcome to the coven' });
});



module.exports = router;
