function Institution(minChange, maxChange) {
	this.minChange = minChange;
	this.maxChange = maxChange;
	this.getChange = function() {
		return Math.round((Math.floor(Math.random() * (this.maxChange - this.minChange + 1)) + parseInt(this.minChange)));
		}
	}

function Library(branch, balance) {
	this.branch = branch;
	this.balance = 200;
}

function printOutput() {
	var government = new Institution (document.getElementById("govMinChange").value,
															   document.getElementById("govMaxChange").value);

	var privateSector = new Institution (document.getElementById("priMinChange").value,
	                                 document.getElementById("priMaxChange").value);

	var library = new Library(document.getElementById("branch").value);

	for (var years = 0; years < document.getElementById("years").value; years++) {
		document.getElementsByClassName("budgetOutput")[years].innerHTML = government.getChange();
		document.getElementsByClassName("donateOutput")[years].innerHTML = privateSector.getChange();
		library.balance = parseInt(library.balance) +
											parseInt(document.getElementsByClassName("donateOutput")[years].innerHTML) +
											parseInt(document.getElementsByClassName("budgetOutput")[years].innerHTML);
		document.getElementsByClassName("balanceOutput")[years].innerHTML = library.balance;
	}
	library.balance = 200;
	var min = Math.min.apply(Math, document.getElementsByClassName("balanceOutput").innerHTML);
}

var submit = document.getElementById("submit");
submit.addEventListener("click", printOutput, false);
