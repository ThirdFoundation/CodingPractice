/* Write a script that will simulate sales of donuts at various locations, based
on foot traffic, pedestrian entry rate, and average order size.  Your script
should be object oriented, and should log sales per location by the hour for an
eleven-hour business day.  CF Week 1 exercises */

var hour = 1;
function Store(name, minFootTraffic, maxFootTraffic, entryRate, orderSize) {
	this.name = name;
	this.minFootTraffic = minFootTraffic;
	this.maxFootTraffic = maxFootTraffic;
	this.entryRate = entryRate;
	this.orderSize = orderSize;
	this.doughnutsSold = 0;
	this.total = 0;
	this.sold = function () {
		this.doughnutsSold = Math.floor((this.minFootTraffic + Math.ceil((Math.random() * (this.maxFootTraffic + 1 - this.minFootTraffic))) * this.entryRate * this.orderSize));
		this.total += this.doughnutsSold;
	}
	this.report = function() {
		console.log("The " + this.name + " store sold " + this.doughnutsSold + " doughnuts, for a current total of " + this.total + ".");
	}
}

var downtown = new Store("Downtown",         80,  220, .1,  4   );
var capHill  = new Store("Capitol Hill",     5,   45,  .45, 2   );
var south    = new Store("South Lake Union", 180, 250, .05, 6   );
var wedge    = new Store("Wedgewood",        20,  60,  .2,  1.5 );
var ballard  = new Store("Ballard",          25,  175, .33, 1   );

for (time = 0; time < 11; time ++) {
	console.log("In hour " + this.hour + ", sales were as follows:");
	downtown.sold();
	downtown.report();
	capHill.sold();
	capHill.report();
	south.sold();
	south.report();
	wedge.sold();
	wedge.report();
	ballard.sold();
	ballard.report();
	console.log("...............................................");
	hour += 1
}