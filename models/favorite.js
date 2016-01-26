var mongoose = require('mongoose');
// var bcrypt   = require('bcrypt');

var FavoriteSchema = mongoose.Schema({
  name: String,
  trailId: Number
});


var Favorite = mongoose.model('Favorite', FavoriteSchema);
// make this available to our other files
module.exports = Favorite;