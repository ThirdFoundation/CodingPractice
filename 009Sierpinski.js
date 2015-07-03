
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
