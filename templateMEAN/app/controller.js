var mongoose = require('mongoose');
var Persona = mongoose.model("Persona");

//obtenego todos los objetos persona de la base de datos
exports.getPersona = function(req, res) {
	Persona.find(
		function(err, persona) {
			if (err) {
				res.send(err)
			}
			res.json(persona);
		}
	);
}

exports.setPersona = function(req, res) {
	Persona.create({
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			usuario: req.body.usuario,
			clave: req.body.clave
		},
		function(err, persona) {
			if (err) {
				res.send(err);
			}
			Persona.find(
				function(err, persona) {
					if (err) {
						res.send(err);
					}
					res.json(persona);
				}
			);

		}
	);
}

exports.updatePersona = function(req, res) {
	Persona.update({
			_id: req.params.persona_id
		}, {
			$set: {
				nombre: req.body.nombre,
				apellido: req.body.apellido,
				usuario: req.body.usuario,
				clave: req.body.clave
			}
		},
		function(err, persona) {
			if (err) {
				res.send(err);
			}
			Persona.find(
				function(err, persona) {
					if (err) {
						res.send(err);
					}
					res.json(persona);
				}
			);

		}
	);
}

exports.deletePersona = function(req, res) {
	Persona.find(function {
		persona.remove(function(err) {
			if (err) {
				res.send(err);
			}
			res.json(persona);
		})
	});
};