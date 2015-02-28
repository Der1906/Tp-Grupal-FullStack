var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:3600/meandb');

app.configure(
	function(){
		app.use(express.static(__dirname+'/angular'));
		app.use(express.logger('dev'));
		app.use(express.urlencoded())
		app.use(express.json())
		app.use(express.methodOverride());
	}
);

//require('./app/routes.js')(app);

app.listen(port);
console.log("app por el puerto "+ port);