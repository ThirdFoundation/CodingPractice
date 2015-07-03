
function flatten(array) {
  array.reduce(
    function(a, b) {
      a.concat(b.forEach(function(element, index, array) {
        return element;
      });
    });
    return array;
}