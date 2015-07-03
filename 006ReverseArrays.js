
function reverseArray(aToZ) {
  var zToA = [];
  for (var i = aToZ.length - 1; i >= 0; i--) {
    zToA.push(aToZ[i]);
  }
  return zToA;
}

