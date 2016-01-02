function sort(numArray) {

	var copiedArray = numArray.slice();
	var result = [];
	var min;
	var index;

	for (var length = copiedArray.length, i = 0; i < length; i++) {
		min = Math.min.apply(Math, copiedArray);
		result[i] = min;
		index = copiedArray.indexOf(min);
		copiedArray.splice(index,1);
	}
	return result;
}

var testCase = [
	[1, 3, -2, 5, 100, -2],
	[6, 5, 4, 3, 1, 0, -10, -21],
	[0, 1, 2, 3 ,4 ,5, 6, 7],
	[1000, 1, 2000, 2, 3000, 3],
	[9999, 9, 8888, 8, 7777, 7],
	[],
	[1, 2],
	[1, 0],
	[1, 1, 1, 1, 1, 10, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, -10, 1, 1, 1, 1]
];

for (var i = 0; i < testCase.length; i++) {
	console.log("Before sort: " + testCase[i] );
	console.log("After sort: " + sort(testCase[i]) + "\n");
}