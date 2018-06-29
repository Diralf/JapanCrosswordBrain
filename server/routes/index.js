var express = require('express');
var router = express.Router();
const brain = require('../brain');
const Crossword = require('../brain/crossword');
const Line = require('../brain/line');

/*
		      1
		  1 3 1 3 1
		  _________	
	  1 | 0 0 1 0 0
	1 1 | 0 1 0 1 0 
	2 2 | 1 1 0 1 1
	1 1 | 0 1 0 1 0
	  1 | 0 0 1 0 0

*/

let crossword1 = new Crossword(
	[
	new Line([1],    [0, 0, 1, 0, 0]),
	new Line([3],    [0, 1, 1, 1, 0]),
	new Line([1, 1], [1, 0, 0, 0, 1]),
	new Line([3],    [0, 1, 1, 1, 0]),
	new Line([1],    [0, 0, 1, 0, 0])
	],
	[
	new Line([1],    [0, 0, 1, 0, 0]),
	new Line([1, 1], [0, 1, 0, 1, 0]),
	new Line([2, 2], [1, 1, 0, 1, 1]),
	new Line([1, 1], [0, 1, 0, 1, 0]),
	new Line([1],    [0, 0, 1, 0, 0])
	]);

router.get('/message', function(req, res, next) {
	let cross = new brain();

	cross.train(crossword1);


  res.json('Welcome To React');
});

module.exports = router;
