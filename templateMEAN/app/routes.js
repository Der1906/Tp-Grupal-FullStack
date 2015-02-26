var Persona = requiere('./model/persona');
var Controller = requiere('./controller');

module.exports = function(app) {

	//devolver todas las personas
	app.get('/api/persona', Controller.getPersona);

	//crear una nueva persona
	app.post('/api/persona', Controller.setPersona);

	//modificar los datos de una persona
	app.put('/api/persona/:persona_id', Controller.updatePersona);

	//Borrar una persona
	app.delete('/api/persona/:persona_id', Controller.removePersona);

	//aplicacion
	app.get('*', 
		function(req, res){
			res.sendfile('./angular/index.html');
		});
};
