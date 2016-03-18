var express = require('express');
var router = express.Router();
var Firebase = require('firebase');

var ref = new Firebase('https://nj-react.firebaseio.com/neil/messages');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({title: "Express", body: "Welcome to express!"});
  // ref.orderByChild('from').equalTo('John').on('child_added', function(snap) {
  // 	res.send(snap.val());
  // });
});

module.exports = router;
