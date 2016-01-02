function quickSort(array) {
	result = array.slice();
	_sortSegment(result, 0, result.length);
	return result;
}

function _sortSegment(array, start, length) {
	if (length < 2) {
		return;
	}

	var pivotIndex = start + length - 1;
	var pivotValue = array[pivotIndex];

	for (var i = start; i < pivotIndex; i++) {
		while (array[i] > pivotValue) {
			_swap(array, i, pivotIndex - 1);
			_swap(array, pivotIndex - 1, pivotIndex);
			pivotIndex--
		}
	}

	_sortSplitSegment(array, start, length, pivotIndex);
}

function _sortSplitSegment(array, start, length, pivotIndex) {
	_sortSegment(array, start, pivotIndex - start);
	_sortSegment(array, pivotIndex + 1, array.length - pivotIndex - 1);
}

function _swap(array, indexOne, indexTwo) {
	var temp = array[indexOne];
	array[indexOne] = array[indexTwo];
	array[indexTwo] = temp;
}

var testCase = [
	[],
	[1],
	[1, 2],
	[-2, 1],
	[2, 1, 3],
	[3, 1, 2],
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
	[11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
	[11, 12, 13, 14, 5, 6, 7, 8, 9],
	[3, 7, 8, 5, 2, 1, 9, 5, 0],
	[3, 7, 8, 5, 2, 1, 9, 5, 1],
	[3, 7, 8, 5, 2, 1, 9, 5, 2],
	[3, 7, 8, 5, 2, 1, 9, 5, 3],
	[3, 7, 8, 5, 2, 1, 9, 5, 4],
	[3, 7, 8, 5, 2, 1, 9, 5, 5],
	[3, 7, 8, 5, 2, 1, 9, 5, 6],
	[3, 7, 8, 5, 2, 1, 9, 5, 7],
	[3, 7, 8, 5, 2, 1, 9, 5, 8],
	[3, 7, 8, 5, 2, 1, 9, 5, 9]
];

for (var i = 0; i < testCase.length; i++) {
	console.log("==================================");
	console.log(testCase[i].join(", "));
	console.log(quickSort(testCase[i]).join(", "));
}