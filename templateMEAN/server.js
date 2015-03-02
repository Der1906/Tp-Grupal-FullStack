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
 });

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
