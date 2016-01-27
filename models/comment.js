var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
  content: String,
  trailId: String
});

var TrailSchema = mongoose.Schema({
  name: String,
  trailId: String,
  comment: [CommentSchema]
});



var Comment = mongoose.model('Comment', CommentSchema);
// make this available to our other files
module.exports = Comment;