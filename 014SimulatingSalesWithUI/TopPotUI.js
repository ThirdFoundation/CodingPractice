//This is the code that will execute when the button is clicked
document.getElementById("button").addEventListener("click", function(e) {
	//This is an array we will use later so that only checked days get processed
	var selected = [],
			//This code uses the checkboxes to create JS variables, e.g. dtbox = "dt"
			dtbox = document.getElementById("dtbox").checked,
			chbox = document.getElementById("chbox").checked,
			slbox = document.getElementById("slbox").checked,
			wwbox = document.getElementById("wwbox").checked,
			blbox = document.getElementById("blbox").checked,
			nebox = document.getElementById("nebox").checked,
			//This code turns the dropdown day selector into a statement about whether it's a weekday
			weekday = (document.getElementById("dayOfWeek").value == "weekday"),
			//This code uses the dropdowns to turn start and end times into JS variables from 7 to 18
			sTime = Number(document.getElementById("startTime").value),
			eTime = Number(document.getElementById("endTime").value),
			//This code logs the input of the text box as a string
			compliment = document.getElementById("compliment").value;

	//This code is a constructor for our Store object, containing each store's unique info
	function Store(name, minTraffic, maxTraffic, entryRate, orderSize, percentReg) {
		this.name = name;
		this.minTraffic = minTraffic;
		this.maxTraffic = maxTraffic;
		this.entryRate = entryRate;
		this.orderSize = orderSize;
		this.percentReg = percentReg;
		this.percentSpec = 1 - percentReg;
		this.perWalker = entryRate * orderSize;
		this.rangeTraffic = maxTraffic - minTraffic;
		this.soldThisHour = 0;
		this.totalSold = 0;
		this.report = this.name + ": " + "";
	}

	//This code confirms checkbox data and, if the box was checked, instantiates a store and pushes the Store object to the "selected" list
	if (dtbox == true) {
		var dt = new Store("Downtown",          80,  220, .1,  4,   .7);
		selected.push(dt);
	}
	if (chbox == true) {
		var ch = new Store("Capitol Hill",      5,   45,  .45, 2,   .3);
		selected.push(ch);
	}
	if (slbox == true) {
		var sl = new Store("South Lake Union",  180, 250, .05, 6,   .5);
		selected.push(sl);
	}
	if (wwbox == true) {
		var ww = new Store("Wedgewood",         20,  60,  .2,  1.5, .1);
		selected.push(ww);
	}
	if (blbox == true) {
		var bl = new Store("Ballard",           25,  175, .33, 1,   .85);
		selected.push(bl);
	}
	if (nebox == true) {
		var ne = new Store("Northeast Seattle", 10,  75,  .8,  8,   .67);
		selected.push(ne);
	}


/*

	if (weekday == true) {
		for (place in selected) {
			for (hour = sTime; hour < eTime; hour ++) {
				console.log(place + ": " + hour);
			}
		}
	}
	else {
		for (place in selected) {
			for (hour = sTime; hour < eTime; hour ++) {
				console.log(place + ": " + hour);
			}
		}
	}

*/

	//This code takes each of the Stores in selected and calculates a donut sales prediction if it's a weekday
	if (weekday == true) {
		for (place in selected) {
			for (hour = sTime; hour < eTime; hour ++) {
				//If we're in the peak hours of 7 to noon ...
				if (7 <= hour < 12) {
					//Donuts sold equals the UPPER HALF of the traffic range, times the per walker rate
					var calcPeak = (Math.random() * (selected[place].rangeTraffic / 2) + (selected[place].rangeTraffic / 2) + selected[place].minTraffic) * selected[place].perWalker;
					selected[place].soldThisHour = calcPeak;
					selected[place].totalSold += selected[place].soldThisHour;
				}
				else {
					//Otherwise, donuts sold equal the LOWER HALF of the range, times the per walker rate
					var calcOffPeak = (selected[place].maxTraffic - (selected[place].rangeTraffic / 2) - Math.random() * (selected[place].rangeTraffic / 2)) * selected[place].perWalker;
					selected[place].soldThisHour = calcOffPeak;
					selected[place].totalSold += selected[place].soldThisHour;
				}

				selected[place].totalSold += selected[place].soldThisHour;
				console.log(selected[place].soldThisHour);
				console.log(selected[place].percentReg);
				var RegSold = Math.ceil(selected[place].soldThisHour * selected[place].percentReg);
				var SpecSold = Math.ceil(selected[place].soldThisHour * (1 - selected[place].percentReg));
				selected[place].report = selected[place].report + RegSold + " regular, " + SpecSold + " specialty;   ";
			}
			selected[place].report = selected[place].report + "for a grand total of " + Math.ceil(selected[place].totalSold);
		}
	}
	//This code takes each of the Stores in selected and calculates a donut sales prediction if it's a weekend
	else {
		for (place in selected) {
			for (hour = sTime; hour < eTime; hour ++) {
				//if we're in the peak hours of 11 to 3 ...
				if (11 <= hour < 3) {
					//Donuts sold equals the UPPER HALF of the traffic range, times the per walker rate
					var calcPeak = (Math.random() * (selected[place].rangeTraffic / 2) + (selected[place].rangeTraffic / 2) + selected[place].minTraffic) * selected[place].perWalker;
					selected[place].soldThisHour = calcPeak;
					selected[place].totalSold += selected[place].soldThisHour;

				}
				else {
					//Otherwise, donuts sold equal the LOWER HALF of the range, times the per walker rate
					var calcOffPeak = (selected[place].maxTraffic - (selected[place].rangeTraffic / 2) - Math.random() * (selected[place].rangeTraffic / 2)) * selected[place].perWalker;
					selected[place].soldThisHour = calcOffPeak;
					selected[place].totalSold += selected[place].soldThisHour;

				}
				//Increment total by soldThisHour, and append a total to the estimates for regular and specialty donuts.
				selected[place].totalSold += selected[place].soldThisHour;
				var RegSold = Math.ceil(selected[place].soldThisHour * selected[place].percentReg);
				var SpecSold = Math.ceil(selected[place].soldThisHour * (1 - selected[place].percentReg));
				selected[place].report = selected[place].report + RegSold + " regular, " + SpecSold + " specialty;"
			}
			selected[place].report = selected[place].report + "for a grand total of " + Math.ceil(selected[place].totalSold);
		}
	}


//These are test statements to confirm that things are, in fact, working when we click
	console.log(compliment);
	console.log(sTime);
	console.log(eTime);
	console.log(selected);
	if (dtbox == true) {
		console.log(dtbox);
		console.log(dt.report);
	};
	if (wwbox == true) {
		console.log(wwbox);
	};
	console.log(weekday);


	document.getElementById("confirm").textContent = compliment + " (and THE ALGORITHM is not afraid to say it.)";
	document.getElementById("overview").textContent = "For each hour from " + sTime + ":00 to " + eTime + ":00, the predicted donut sales are (regular/specialty):";
	if (dtbox == true) {
	document.getElementById("dtreport").textContent = dt.report;
	}
	if (chbox == true) {
	document.getElementById("chreport").textContent = ch.report;
	}
	if (slbox == true) {
	document.getElementById("slreport").textContent = sl.report;
	}
	if (wwbox == true) {
	document.getElementById("wwreport").textContent = ww.report;
	}
	if (blbox == true) {
	document.getElementById("blreport").textContent = bl.report;
	}
	if (nebox == true) {
	document.getElementById("nereport").textContent = ne.report;
	}

	return false;
});



