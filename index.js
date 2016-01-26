var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
var Stuff = require('./models/stuff');
// var User = require('./models/user');
var Trail = require('./models/trail');
var Comment = require('./models/comment');
mongoose.connect('mongodb://localhost/stuff');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/stuff', require('./controllers/stuff'));

// Below codes unnecessary as catch-all is handled by 'otherwise' in ngRoute (app.js)
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// // });
// app.get('/', function(req, res) {
//     res.send('Username: ' + req.query['username']);
// });
// app.get('/', function(req, res) {
//     res.send('Username: ' + req.query['username']);
// });

// app.post('/', function(req, res) {
//     res.send('Username: ' + req.body.username);
// };

app.listen(3000, function(){
	console.log('Port 3000 running');
});
