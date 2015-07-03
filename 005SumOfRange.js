/* Write a range function that takes four arguments (start, end, step, and sum),
and returns an array containing all the numbers from start to end, incrementing
by step. If sum was true, also return the sum of the numbers in the array. EJS
Ch. 4 exercises */

function range(start, end, step, sum) {
  if (Number(end) < Number(start)) {
    alert("You might have those backwards, Holmes.");
    return;
  }
  var result = [];
  var increment = step || 1;
  var span = end - start;
  for (var i = 0; i <= span; i += increment) {
    result.push(start + i);
  }
  if (sum !== true) {
    return result;
  } else {
    var addEmUp = result.reduce(function(a, b) {return a + b;});
    var resultAndSum = [result, addEmUp];
    return resultAndSum;
  }
}