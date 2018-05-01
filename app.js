
//modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var socket = require('socket.io');
var chalk = require('chalk');

//routes
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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


/////////////////////////////////////////////// SECKET.IO ////////////////////////////////////////TESTING

//socket USERLIST 

let userList = [
  { name: "Admin",    type: 1,   active: false},
  { name: "Peasant",  type: 2,   active: false},
  { name: "Mario",    type: 3,   active: false},
  { name: "Peach",   type: 4,   active: false}
];

function logMessage(name, message) {
	console.log(chalk.green("Server Reveived new message:"));
	console.log(chalk.yellow(`Message contents : ${message}`));
	console.log(chalk.yellow(`From user : ${name}`));
}

var fakeserver = app.listen(4000, function () {
	console.log("listening on port 4000 (fakeserver)");
});

//setup server
var io = socket(fakeserver);
var concurrentUsersLimit = 3;


//new socket connection
io.on("connection", (socket) => {

	// allow connection if room has space
	const chatroomHasSpace = io.engine.clientsCount <= concurrentUsersLimit;

	if (!chatroomHasSpace) 
	{
		socket.emit('roomIsFull', { message: 'We are very sorry, but room limit has been met' });
		socket.disconnect();
		return
	} 
	else 
	{
		socket.emit('joinedRoom', { message: 'Welcome to coven iniate,', roomStatus:userList });
	}

	//user requesting to join chat
	socket.on("allowChatAccessAs", (data) => 
	{
		const requestName = data.requestToUseName
		const index = userList.findIndex( (x) => x.name === requestName );
		const user  = userList[index];
		const userIsAvailable = (user.active) ? false : true;
		const previousTakenUsername = (socket.takenUserName) ? true : false;
		
		//allow access if socket doesn't already have username and username is available
		if (!previousTakenUsername && userIsAvailable)
		{			
			user.active = true;	//username is now active	
			socket.takenUserName = requestName; //associate username with socket
			
			//update room status
			socket.emit("usernameGranted", {username: requestName});
			io.sockets.emit("roomRefresh", { message: `${requestName} connected`, roomStatus:userList });

			//allow chatting 
			socket.on("chat", (data) => {
				logMessage(user.name, user.message);
				const newchatMessage = { 
					user: user.name, 
					content: data.message, 
					timestamp: new Date(), 
					userType: user.type 
				};
				io.sockets.emit("newMessages", newchatMessage);
			});

			socket.on("leaveRoom", () => {				
				socket.disconnect(0);
			});

			socket.on('disconnect', () => {	
				user.active = false;													
				io.sockets.emit('roomRefresh', {
					message:`${socket.takenUserName} left room`,
					roomStatus:userList
				});
			});
		}
		//username was taken, reject request
		else 
		{
			socket.emit('warning', { message: 'You already have a username or that username is taken' });
		}
	});

});


//////////////////////////////////////////////////////////////////////////////////////TESTING

module.exports = app;
