var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost:27017/meandb');

app.configure(
	function(){
		app.use(express.static(_dirname+'/angular'));
		app.use(express.logger('dev'));
		app.use(express.bodyParser());
		app.use(express.methodOverrride());
	}
);

require('./app/routes.js')(app);

app.listen(port);
console.log("app por el puerto "+ port);