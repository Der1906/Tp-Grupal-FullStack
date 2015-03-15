 var personaDAO = {
 	personasCollection: function personasCollection(db) {

 		db.collection('personas').find().toArray(function(err, results) {
 			console.dir(results);
 			db.close();
 		});

 	}
 };

 module.exports = personaDAO;