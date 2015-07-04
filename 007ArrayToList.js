/* Write a function arrayToList that takes an array and builds up a nested set
of objects, with the first object holding a reference to the second, the second
holding a reference to the third, and so on (example below).  Then write
listToArray that will do the reverse.  Write the helper function prepend, which
will take an element and a list and generate a new list with that element at the
front, and enth, which will take a list and a number and return the element at
the given position.

var list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: {
				value: 4,
				rest: null
			}
		}
	}
}; */

function arrayToList(array) {
	var list = null;
	for (var i = array.length - 1; i >= 0; i--) {
		list = {value: array[i], rest: list};
	}
	return list;
}

function listToArray(list) {
	var array = [];
	for (var node = list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}

function prepend(elem, list) {
	var list = {value: elem, rest: list};
}

function enth(list, num) {
	if (isNaN(num) || Math.floor(num) !== (num) || num < 1) {
		alert('Nope.');
		return;
	}
	if (num === 1) {
		return list.value;
	} else {
			return enth(list.rest, num - 1);
	}
}




