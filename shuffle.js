function shuffle(array) {

	var result = array.slice();
	
	var length = result.length - 1;

	var randIndex;
	
	for (var i = length; i > 0; i--) {
		randIndex = Math.floor((i + 1) * Math.random());
		_swap(result, i, randIndex);
	}
	return result;
}

function _swap(arr, indexOne, indexTwo) {
	var temp = arr[indexOne];
	arr[indexOne] = arr[indexTwo];
	arr[indexTwo] = temp;
}

var testCase = [
	[],
	[1],
	[2, 1],
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
];

for (var i = 0; i < testCase.length; i++) {
	if (testCase[i].length == 0) {
		console.log("Empty array");
	} else {
		console.log("=================================================");
		console.log("    Original array: " + testCase[i].join(", "));
		console.log("Randomized array 1x: " + shuffle(testCase[i]).join(", "));
		console.log("Randomized array 2x: " + shuffle(testCase[i]).join(", "));
		console.log("Randomized array 3x: " + shuffle(testCase[i]).join(", "));
		console.log("Randomized array 4x: " + shuffle(testCase[i]).join(", "));
		console.log("Randomized array 5x: " + shuffle(testCase[i]).join(", "));
	}
}