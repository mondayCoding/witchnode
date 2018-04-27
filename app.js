var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var socket = require('socket.io');
var chalk = require('chalk');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

///////////////////////////////////////////////////////////////////////////////////////TESTING

var fakeserver = app.listen(4000, function(){
   console.log("listening on port 4000 (fakeserver)");
});

//setup websockets
var io = socket(fakeserver);

//uusi socket yhteys saapuu
io.on("connection", function(socket){

   //logataan yhteyden id consoliin
   console.log(chalk.green(`new socket connected: ${socket.id}`));

   //uusi viesti vastaanotettu
   socket.on("chat", (data) => {

      console.log(chalk.green("Server Reveived new message:"));
      console.log(chalk.yellow(`Message contents : ${data.message}`));
      console.log(chalk.yellow(`From user : ${data.user}`));
      let add = {user:data.user, content:data.message, timestamp:new Date(), userType: 2 };

      //lähetetään uusi viesti kaikille
      io.sockets.emit("newMessages", add);
   });

   //yhteyden katkaisupyynto
   socket.on("end", () => {
      console.log(chalk.red(`connection id:${socket.id} asked to terminate connection`));
      socket.disconnect(0);
   });
});

//////////////////////////////////////////////////////////////////////////////////////TESTING

module.exports = app;
