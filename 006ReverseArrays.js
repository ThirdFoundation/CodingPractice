/* Write a function that will take an array as an argument and produce a new
array in reverse order.  Then write a function that will modify the original
array to reverse its elements. EJS Ch.4 exercises */

function reverseArray(aToZ) {
  var zToA = [];
  for (var i = aToZ.length - 1; i >= 0; i--) {
    zToA.push(aToZ[i]);
  }
  return zToA;
}

function reverseArrayInPlace(aToZ) {
	var temp;
	var end = aToZ.length - 1;
	for (var i = 0; i < aToZ.length/2; i++) {
		temp = aToZ[i];
		aToZ[i] = aToZ[end - i];
		aToZ[end - i] = temp;
	}
	return aToZ;
}
