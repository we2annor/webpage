
// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`app running on port ${port}`));


var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
dotenv.load();

var index = require('./routes/index');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 error and forward to error handler
app.use(function(req, res, next){
	var err = new Error('Not found');
	err.status = 404;
	next(err);
})

// error handler
app.use(function (err, req, res, next){
	//set locals only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	//render the error message
	res.status( err.status || 500);
	res.render('error');
});

//export default app
