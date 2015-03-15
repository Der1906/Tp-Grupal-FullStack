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
 });
 */
 //app.use('/greet', router);

 var server = app.listen(3000, function(req, res) {
 	var host = server.address().address;
 	var port = server.address().port;
 	console.log('Arranco el servidor ' + host + ':' + port);

 });