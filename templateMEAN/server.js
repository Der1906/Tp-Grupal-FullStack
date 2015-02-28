var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var app = express();
var port = process.env.PORT || 3000;

//mongoose.connect('mongodb://localhost:3600/meandb');


//app.configure(
//	function(){
		app.use(express.static(__dirname + '/angular'));
		//app.use(express.logger('dev'));
		//app.use('/angular', express.static(path.join(__dirname, '/angular/')));
		app.use(bodyParser.json());
		//app.use(express.json())
		//app.use(express.methodOverride());
//	}
//);

//require('./app/routes.js')(app);

//var route = express.Router();



app.listen(port);
console.log("app por el puerto "+ port);