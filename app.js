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

///////////////////////////////////////////////////////////////////////////////////////TESTING

//socket USERLIST 

let userList = [
  { name: "Admin",    type: 1,   active: false},
  { name: "Peasant",  type: 2,   active: false},
  { name: "Mario",    type: 3,   active: false},
  { name: "Peach",   type: 4,   active: false}
]

var fakeserver = app.listen(4000, function () {
	console.log("listening on port 4000 (fakeserver)");
});

//setup websockets
var io = socket(fakeserver);

//options
var concurrentUsersLimit = 3;

//new socket connection
io.on("connection", (socket) => {

	const requestName = socket.handshake.query.requestName

	//log current session and requested username from connection
	console.log(chalk.green(requestName + " is connectiong"));
	console.log(chalk.green(`Users in session [${io.engine.clientsCount}]`));

	//get index and availability for username
	const index = userList.findIndex( (x) => x.name === requestName );
	const user  = userList[index];
	const userIsAvailable = (user.active) ? false : true;
	const chatroomHasSpace = io.engine.clientsCount <= concurrentUsersLimit;


	//reject connection if ursername is not free or there is no space in chatroom	
	if (!userIsAvailable || !chatroomHasSpace) 
	{
		socket.emit('err', { message: 'That user is already connected or room limit has been met' });
		socket.disconnect();
		return
	} 
	else //had space connect
	{
		//emit success message
		socket.emit('success', { message: `Connected as ${requestName}` });

		//mark username as taken
		const userIndex = userList.findIndex( (x) => x.name === requestName );
		user.active = true;
		
		//associate username with socket
		socket.takenUserName = requestName;
		console.log(chalk.green(`new socket connected: ${socket.takenUserName}`));
	}
	
	//listen for new messages
	socket.on("chat", (data) => 
	{
		console.log(chalk.green("Server Reveived new message:"));
		console.log(chalk.yellow(`Message contents : ${data.message}`));
		console.log(chalk.yellow(`From user : ${data.user}`));
		let add = { user: data.user, content: data.message, timestamp: new Date(), userType: 2 };

		io.sockets.emit("newMessages", add);
	});

	//listen for termination request
	socket.on("end", () => 
	{
		console.log(chalk.red(`connection id:${socket.id} asked to terminate connection`));
		socket.disconnect(0);
	});

	socket.on('disconnect', () => {
		socket.emit('disconnected');
		user.active = false;
		user.active = false;
		console.log(userList);
		
  });

});


//////////////////////////////////////////////////////////////////////////////////////TESTING

module.exports = app;
