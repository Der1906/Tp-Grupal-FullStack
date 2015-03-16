<<<<<<< HEAD
var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongodb     = require('mongodb').MongoClient;
var router = express.Router();
var port = process.env.PORT || 3000;

// propiedades de la conexion a la base de datos
var db_host = "127.0.0.1";
var db_port = "27017";
var db_name = "mongodb";
var db_string = "mongodb://".concat(db_host,":",db_port,"/",db_name);

// Conexion a MongoDB
mongodb.connect(db_string, function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
=======
 var mongodb = require('mongodb').MongoClient;
 var format = require('util').format;
 //var app = require('./app/routes');
 var express = require('express');
 var app = express();
 var router = express.Router();

 //var personaDAO = require('./app/dao/personaDao');

 app.use(express.static(__dirname + '/public'));
 app.use(router);

 router.get('/api/persona', function(req, res) {

 	mongodb.connect('mongodb://127.0.0.1:27017/prode',
 		function(error, db) {
 			if (error) {
 				throw error;
 			}

 			console.log('Conexion a la base realizada.');

 			db.collection('personas').find().toArray(function(err, results) {
 				console.log(results);
 				res.send(results);
 				db.close();
 				console.log('Conexion a la base fue cerrada.');
 			});

 		}
 	);

 });


 router.post('/api/persona/insert',
 	function(req, res) {

 		req.on('data',
 			function(data) {
 				var json = JSON.parse(data.toString());
 				
 				mongodb.connect('mongodb://127.0.0.1:27017/prode',
 					function(error, db) {
 						if (error) {
 							throw error;
 						}

 						console.log('Conexion a la base realizada.');

 						db.collection('personas').insert(json,
 							function(error, records) {

 								if (error) {
 									throw error;
 								}

 								res.send('OK');
 								//console.log("Record added as " + records[0]._id);
 								db.close();
 								console.log('Conexion a la base fue cerrada.');
 							}
 						);

 					}
 				);

 			}
 		);
 	}
 );



 /*router.get('/api/persona', function (req, res) {
   console.log('route'); // /greet
   res.send('Konichiwa!');
>>>>>>> master
 });
 */
 //app.use('/greet', router);

 var server = app.listen(3000, function(req, res) {
 	var host = server.address().address;
 	var port = server.address().port;
 	console.log('Arranco el servidor ' + host + ':' + port);

<<<<<<< HEAD
// Middlewares
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(router);
app.use('/api', router);
app.listen(port, function() {
   console.log("Node server running on http://localhost:3000");
});
=======
 });
>>>>>>> master
