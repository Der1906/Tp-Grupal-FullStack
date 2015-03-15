 var personaDAO = {
 	personasCollection: function personasCollection(db) {
 		var arrResults = [];
 		db.collection('personas').find().toArray(function(err, results) {

 			arrResults = results;
 			
 		});

 	}
 };

 module.exports = personaDAO;