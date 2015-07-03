/* Write a program that creates a string that represents a grid of size n, using
newline characters to separate lines. At each position of the grid there is
either a space or a “#” character. The characters should form a chess board.
EJS, Ch.2 exercises */

function makeGrid(num) {
	var lines = [];
	var firstLine = '';
	for (var i = 1; i <= num; i++) {
		if (i % 2 !== 0) {
			firstLine += '#';
		} else {
			firstLine += ' ';
		}
	}
	var secondLine = firstLine.slice(1);
	if (num % 2 === 0) {
		secondLine += '#';
	} else {
		secondLine += ' ';
	}
	for (var j = 1; j <= num; j++) {
		if (j % 2 !== 0) {
			lines.push(firstLine);
		} else {
			lines.push(secondLine);
		}
	}
	return lines.join('\n');
}

makeGrid(8);
