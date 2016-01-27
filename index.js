var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var http = require('http');
var https = require('https');
var fs = require('fs');
var privateKey  = fs.readFileSync('key.pem', 'utf8');
var certificate = fs.readFileSync('cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var mongoose = require('mongoose');
var Stuff = require('./models/stuff');
// var User = require('./models/user');
var Trail = require('./models/trail');
var Comment = require('./models/comment');
mongoose.connect(process.env.MONGOLAB_URI);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/stuff', require('./controllers/stuff'));
//Below codes unnecessary as catch-all is handled by 'otherwise' in ngRoute (app.js)
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
	
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(process.env.PORT);
httpsServer.listen(process.env.SSLPORT);
