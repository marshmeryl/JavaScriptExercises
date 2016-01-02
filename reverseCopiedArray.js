var testArray = [1, 5, 2, 1, 100, 2];

function reverseArray(numArray) {
	var result = [];

	var lastIndex = numArray.length - 1;

	for (var i = 0; i < numArray.length; i++) {
		result.push(numArray[lastIndex - i]);
	}
	return result;
}

var reversedArray = reverseArray(testArray);

if (!reversedArray.length) {
	console.log("Empty array!");
} else {
	console.log(testArray + " is now " + reversedArray);
}