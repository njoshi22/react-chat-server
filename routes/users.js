var express = require('express');
var router = express.Router();
var messages = require('./userMessages');
var data = require('./userData');

/* MIDDLEWARE for other routes */
router.use('/:userId/messages', messages);
router.use('/:userId/data', data);


// var Firebase = require('firebase');

/* GET users listing. */
router.get('/:userId', function(req, res, next) {
  // var user = req.params.userId.capitalise();
  // var userRef = new Firebase('https://nj-react.firebaseio.com/neil/');
  // var dataRef = userRef.child('data');
  // var messagesRef = userRef.child('messages');

  // messagesRef.orderByChild('from').equalTo(user).on('child_added', function(snap) {
  // 	res.send(snap.val());
  // });

  res.send(200);

});

module.exports = router;