/* Use the reduce method in combination with the concat method to “flatten” an
array of arrays into a single array that has all the elements of the input
arrays. EJS Ch.5 challenges

Additional self-challenge: create a recursive deepFlatten function that will
flatten an array of arrays of any depth */

function flatten(array) {
	return array.reduce(function(prev, current) {
		return prev.concat(current);
	}, []);
}

function deepFlatten(array) {
	return array.reduce(function(prev, current) {
		if (Array.isArray(current)) {
			return prev.concat(deepFlatten(current));
		} else {
			return prev.concat(curent);
		}
	}, []);
}

// var nested = [1, 2, [3, 4, [5, 6, [7, 8, [9, 0], 'a'], 'b'], 'c'], 'd'];
