/* Write a script that will simulate a race between a turtle (low speed, high
focus) and a rabbit (high speed, low focus).  Your script should be object
oriented, and should log commentary on the progress of the race to the console.
CF Week 1 exercises */

function Animal(species, name, speed, focus) {
	this.species = species;
	this.name = name;
	this.speed = speed;
	this.focus = focus;
	this.position = 0;
	this.run = function() {
		if (Math.random() * 10 < this.focus) {
			this.position = this.position += this.speed;
		}
	}
	this.report = function() {
		console.log(this.name + " has run " + this.position + " so far.");
	}
}

var rabbit = new Animal("rabbit", "Peter", 7, 3);
var turtle = new Animal("turtle", "Moe", 2, 9);

while (rabbit.position < 100 && turtle.position < 100) {
	rabbit.run();
	turtle.run();

	rabbit.report();
	turtle.report();
	if (rabbit.position > turtle.position) {
		console.log(rabbit.name + " is in the lead! Will " + turtle.name + " be able to catch up?");
	} else if (rabbit.position < turtle.position) {
		console.log(rabbit.name + " is lagging behind! What an unexpected turn of events!");
	} else {
		console.log("They're neck-and-neck! Folks, this is anyone's race!");
	}
}

if (turtle.position > rabbit.position) {
	console.log("And in the upset of the century, " + turtle.name + " wins!");
}
else {
	console.log(turtle.name + " put up a good fight, folks, but we all knew it was " + rabbit.name + "'s game from the start!");
}
