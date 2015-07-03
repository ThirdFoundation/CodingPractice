/* Write a recursive function isEven that will determine whether a number is
even or odd based off the following data: zero is even, one is odd, and for any
other number N, its evenness is the same as N - 2.  Test to confirm that your
function works with negative numbers.  EJS, Ch.3 exercises */

function isEven(num) {
	function compare(n) {
		var result;
		n = Math.floor(n);
		if (n === 0) {
			result = true;
		} else if (n === 1) {
			result = false;
		} else if (n > 1) {
			result = compare(n - 2);
		} else if (n < 0) {
			result = compare(-n);
		}
		return result;
	}
	return compare(num);
}