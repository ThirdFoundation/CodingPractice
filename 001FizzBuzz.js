/* Write a program that uses console.log to print all the numbers from 1 to 100
with two exceptions: for numbers divisible by 3, print "Fizz", for numbers
divisible by 5, pring "Buzz", and for numbers divisible by both, print
"Fizzbuzz".  EJS, Ch.2 exercises */

function fizzbuzz() {
	for (var count = 1; count <=100; count +=1)
		if (count % 3 != 0 && count % 5 != 0)
			console.log(count);

		else if (count % 3 == 0 && count % 5 != 0)
			console.log("Fizz");

		else if (count % 3 != 0 && count % 5 == 0)
			console.log("Buzz");

		else if (count % 3 == 0 && count % 5 == 0)
			console.log("FizzBuzz");
}

fizzbuzz();



