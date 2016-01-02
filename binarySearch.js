//Binary search function

function binarySearch(array, x) {
	var result = _quickSort(array);
	var start = 0;
	var end = result.length - 1;
	var mid;
	var midValue;

	while (start <= end) {
		mid = Math.ceil((start + end) / 2);
		midValue = result[mid];
		if (midValue == x) {
			return mid;
		} else if (x < midValue) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}

//Sort function

function _quickSort(arr) {
	var result = arr.slice();
	_sortSection(result, 0, result.length);
	return result;
}

function _sortSection(arr, start, length) {
	if (length < 2) {
		return;
	}

	var pivotIndex = start + length - 1;
	var pivotValue = arr[pivotIndex];

	for (var i = start; i < pivotIndex; i++) {
		while (arr[i] > pivotValue) {
			if (pivotIndex == i + 1)
			{
				_swap(arr, i, pivotIndex);
				pivotIndex--;
				continue;
			}

			_swap(arr, i, pivotIndex - 1);
			_swap(arr, pivotIndex - 1, pivotIndex);
			pivotIndex--;
		}
	}

	_splitSection(arr, start, length, pivotIndex);
}

function _splitSection(arr, start, length, pivotIndex) {

	_sortSection(arr, start, pivotIndex - start);
	_sortSection(arr, pivotIndex + 1, arr.length - pivotIndex - 1);
}

//Swap function

function _swap(arr, indexOne, indexTwo) {
	var temp = arr[indexOne];
	arr[indexOne] = arr[indexTwo];
	arr[indexTwo] = temp;
}

//Test Cases:

var testCase = [
	[],
	[1],
	[5],
	[1, 2],
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[3, 7, 5, 4, 2, 1, 9, 5, 0]
];

var index = [];
var target = 5;

for (var i = 0; i < testCase.length; i++) {
	
	index = binarySearch(testCase[i], target);

	if (index == -1) {
		console.log("==================================");
		console.log("Original array: " + testCase[i].join(", "));
		console.log(target + " not found in array");
	} else {
		console.log("==================================");
		console.log("Original array: " + testCase[i].join(", "));
		console.log("  Sorted array: " + _quickSort(testCase[i]).join(", "));
		console.log(target + " was found at index " + index);
	}
}