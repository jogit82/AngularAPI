var express = require('express');
var Stuff = require('../models/stuff');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Stuff.find(function(err, stuff) {
      if (err) return res.status(500).send(err);
      res.send(stuff);
    });
  })
  .post(function(req, res) {
    Stuff.create(req.body, function(err, stuff) {
      if (err) return res.status(500).send(err);
      res.send(stuff);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Stuff.findById(req.params.id, function(err, stuff) {
      if (err) return res.status(500).send(err);
      res.send(stuff);
    });
  })
  .put(function(req, res) {
    Stuff.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    Stuff.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;
