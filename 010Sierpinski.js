/* Write a function that takes an integer n and returns the nth iteration of the
fractal Sierpinski's gasket. The fractal is composed entirely of ‘L’ and white-space characters; each character has one space between it and the next (or a newline). CodeWars 6th kyu challenge */

/* Example iterations given in problem statement; I replaced space characters
with bullets for easier viewing/counting.

0:	L

1:	L
		L•L

2:	L
		L•L
		L•••L
		L•L•L•L

3:	L
		L•L
		L•••L
		L•L•L•L
		L•••••••L
		L•L•••••L•L
		L•••L•••L•••L
		L•L•L•L•L•L•L•L

*/

function sierpinski(n) {
  var lines = addLines(n);
  return lines.join('\n');
  function addLines(n) {
		if (n === 0) {
			return ['L'];
		} else {
			var prev = addLines(n - 1);
			var limit = Math.pow(2, (n - 1));
			for (var i = 0; i < limit; i++) {
				var howManySpaces = Math.pow(2, n) - (2*i + 1);
				var spaces = '';
				while (howManySpaces > 0) {
					spaces += ' ';
  				howManySpaces--;
				}
				var line = prev[i] + spaces + prev[i];
				prev.push(line);
			}
			return prev;
		}
  }
}
