/*
var mongoose = require('mongoose');

module.exports = mongoose.model(
	'Persona',
	{
		nombre: String,
		apellido: String,
		usuario: String,
		clave: String
	}
);
*/
exports = module.exports = function(app, mongoose) {
	var personaSchema = new mongoose.Schema({
		nombre: String,
		apellido: String,
		usuario: String,
		clave: String
	});
	mongoose.model("Persona",personaSchema);
};