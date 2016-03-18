var express = require('express');
var router = express.Router({mergeParams: true});
var Firebase = require('firebase');

var userRef = new Firebase('https://nj-react.firebaseio.com/neil');
var dataRef = userRef.child('data');

String.prototype.capitalise = function() {
	return this.replace(this.charAt(0),this.charAt(0).toUpperCase());
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = req.params.userId.capitalise();

  dataRef.on('value', function(snap) {
  	res.send({
  		description: 'All data properties for ' + user,
  		content: snap.val()
  	});
  });
})

.get('/:datum', function(req,res,next) {
	var datum = req.params.datum;
  var datumRef = userRef.child('data/' + datum);

	datumRef.on('value', function(snap) {
  		res.send({
  			description: 'Data for ' + datum,
  			content: snap.val()
  		});
  	});
});

module.exports = router;