const Line = require('./line');
const Crossword = require('./crossword');

let normilizeInput = (inputValue, size) => {
	return inputValue / size;
}

// {input: [2, 2], output: [1, 1, 0, 1, 1]}
// {input: [], output: [1, 1, 0, 1, 1]}
let normalizeLine = (line) => {
	let size = line.output.length;
	let normInput = line.input.map(val => normilizeInput(val, size));
	return new Line(normInput, line.output);
}
	
exports.crossword = (crossword) => {
	return new Crossword(
		crossword.vertical.map(line => normalizeLine(line)),
		crossword.horizont.map(line => normalizeLine(line)));
}

