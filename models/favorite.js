var mongoose = require('mongoose');
// var bcrypt   = require('bcrypt');

var FavoriteSchema = mongoose.Schema({
  name: String,
  trailId: Number
});

module.exports = mongoose.model('Favorite', FavoriteSchema);