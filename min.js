function min(numArray) {

	if (!numArray.length) {
		return null;
	}

	var result = numArray[0];

	for (var i = 1; i < numArray.length; i++) {
		if (numArray[i] < result) {
			result = numArray[i];
		}
	}
	return result;
}

var testArray = [0, 1, 2, 3, -1];

var minResult = min(testArray);

if (minResult === null) {
	console.log("Empty array!");
} else {
	console.log(minResult);
}