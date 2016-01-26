//// this is the comment controller, it posts comments to db / individual hikes. called when comment.html input posts to db.

/// createComment method

router.route('/')
	.get(function(req, res){
		Comment.find(req.params.id, function(err, comment){
			if (err) return res.status(500).send(err);
			res.send(comments);
	});
}).post(function(req, res) {
    Comment.create(req.body, function(err, comment) {
      if (err) return res.status(500).send(err);
      res.send(comment);
    });
  });



// router.route('/')
//   .get(function(req, res) {
//     Comment.find(function(err, recipes) {
//       if (err) return res.status(500).send(err);
//       res.send(comments);
//     });
//   })
//   .post(function(req, res) {
//     Comment.create(req.body, function(err, comment) {
//       if (err) return res.status(500).send(err);
//       res.send(comment);
//     });
//   });

router.route('/:id')
  .get(function(req, res) {
    Comment.findById(req.params.id, function(err, comment) {
      if (err) return res.status(500).send(err);
      res.send(comment);
    });
  });
  // .put(function(req, res) {
  //   Comment.findByIdAndUpdate(req.params.id, req.body, function(err) {
  //     if (err) return res.status(500).send(err);
  //     res.send({'message': 'success'});
  //   });
  // })
  // .delete(function(req, res) {
  //   Recipe.findByIdAndRemove(req.params.id, function(err) {
  //     if (err) return res.status(500).send(err);
  //     res.send({'message': 'success'});
  //   });
  // });

module.exports = router;