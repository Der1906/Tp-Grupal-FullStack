var express = require ('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Y Diego se durmio');
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