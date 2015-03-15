 var mongodb = require('mongodb').MongoClient;
 var format = require('util').format;
 var app = require('./app/routes');
 var personaDAO = require('./app/dao/personaDao');

 var server = app.listen(3000, function(req, res) {
 	var host = server.address().address;
 	var port = server.address().port;
 	console.log('Arranco el servidor ' + host + ':' + port);

 	mongodb.connect('mongodb://127.0.0.1:27017/prode',
 		function(error, db) {
 			if (error) {
 				throw error;
 			}

 			console.log('Conexion a la base realizada.');

 			personaDAO.personasCollection(db);

 		}
 	);

 });