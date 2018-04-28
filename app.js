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
  { name: "Monday",   type: 4,   active: false},
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

	//log current session
	console.log(`Users in session [${io.engine.clientsCount}]`);

	//reject if no space	
	if (io.engine.clientsCount > concurrentUsersLimit) 
	{
		socket.emit('err', { message: 'Limit of concurrent connections reached' });
		console.log(chalk.red(`Disconnected... (${socket.id}, no space)`));
		socket.disconnect();
		return
	} 
	else //had space connect
	{
		socket.emit('success', { message: 'connected' });
		console.log(chalk.green(`new socket connected: ${socket.id}`));
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
});


//////////////////////////////////////////////////////////////////////////////////////TESTING

module.exports = app;
