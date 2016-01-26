var mongoose = require('mongoose');

var StuffSchema = new mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Stuff', StuffSchema);
