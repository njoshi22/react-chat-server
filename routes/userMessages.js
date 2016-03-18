var express = require('express');
var router = express.Router({mergeParams: true});
var Firebase = require('firebase');

var userRef = new Firebase('https://nj-react.firebaseio.com/neil');
var messagesRef = userRef.child('messages');

String.prototype.capitalise = function() {
	return this.replace(this.charAt(0),this.charAt(0).toUpperCase());
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = req.params.userId.capitalise();

  messagesRef.on('value', function(snap) {
  	res.send({
  		description: 'All messages for ' + user,
  		content: snap.val()
  	});
  });
})

.get('/:fromUser', function(req,res,next) {
	var fromUser = req.params.fromUser.capitalise();
	messagesRef.orderByChild('from').equalTo(fromUser).on('child_added', function(snap) {
  		res.send({
  			description: 'Messages from ' + fromUser,
  			content: snap.val()
  		});
  	});
});

module.exports = router;