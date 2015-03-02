var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');
var router = express.Router();
var port = process.env.PORT || 3000;

// Conexion a Mongoose
mongoose.connect('mongodb://localhost/meanDB', function(err, res) {
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