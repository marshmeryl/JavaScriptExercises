function bubbleSort(numArray) {

	var result = numArray.slice();

	var swapped;

	do {
		swapped = false;
		for (var i = 1; i < result.length; i++) {
			if (result[i] < result[i - 1]) {
				var temp = result[i];
				result[i] = result[i - 1];
				result[i - 1] = temp;
				swapped = true;
			}
		}
	}
	while(swapped);
	return result;
}

function _swap(arr, indexOne, indexTwo) {
	var temp = arr[indexOne];
	arr[indexOne] = arr[indexTwo];
	arr[indexTwo] = temp;
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
	console.log("After sort: " + bubbleSort(testCase[i]) + "\n");
}