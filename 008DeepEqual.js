/* Write a function deepEqual that will return true if and only if they are the
same value or are objects with identical properties whose values are equal all
the way down. EJS Ch.4 exercises */

function deepEqual(thing1, thing2) {
	if (thing1 === thing2) {
		return true;
	}
	if (thing1 == null ||
			thing2 == null ||
			typeof thing1 != "object" ||
			typeof thing2 != "object") {
		return false;
	}

	var numberOfPropertiesInThing1 = 0;
	for (var prop in thing1) {
		numberOfPropertiesInThing1++;
	}

	var numberOfPropertiesInThing2 = 0;
	for (var propOfThing2 in thing2) {
		numberOfPropertiesInThing2++;
		/* If this particular property of B has no corresponding value inside A,
		return false. Also, if a[this particular property] and b[this particular
		property] aren't deeply equal, return false. */
		if (!(propOfThing2 in thing1) ||
				!deepEqual(thing1[propOfThing2], b[propOfThing2])) {
			return false;
		}
	}

	/* Having confirmed that they're objects and that all of the properties in b
	are present and equal in a, now we just need to make sure that a doesn't have
	MORE properties than b. */
	return numberOfPropertiesInThing1 === numberOfPropertiesInThing2;
}
