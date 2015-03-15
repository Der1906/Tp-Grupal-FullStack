var express = require('express');
var app = express();
//var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var format = require('util').format;
// var personaDAO = require('./dao/personaDao');


/*app.get('/', function (req, res) {
	res.send('Respondiendo...');
});
*/

//app.use(router);
/*router.get('/api/persona', function (req, res) {
  console.log('route'); // /greet
  res.send('Konichiwa!');
});
*/
app.route.get('/api/persona', function(req, res) {

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

module.exports = app;


/*var models = require('..model/persona')(app, mongoose);
var PersonaControl = require('controller');

var persona =  express.Router();
tvshows.route('/persona')
  .get(PersonaControl.getPersona)
  .set(PersonaControl.setPersona)
  .update(PersonaControl.updatePersona)
  .delete(PersonaControl.deletePersona);*/