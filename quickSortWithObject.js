var numArray = [3, 7, 8, 5, 2, 1, 9, 5, 4];

function quickSort(arr) {
	var result = arr.slice();
	_sortSector({arr: result});
	return result;
}

function _sortSector(arrRange) {
	var arr = arrRange.arr;
	var start = arrRange.start || 0;
	var length = arrRange.length || arr.length;

	if (length < 2) {
		return;
	
}
	var pivotIndex = _getArrRangeEndIndex(arrRange);
	var pivotValue = arr[pivotIndex];

	for (var i = start; i < pivotIndex; i++) {
		while (arr[i] > pivotValue) {

			_swap(arr, i, pivotIndex - 1);
			_swap(arr, pivotIndex - 1, pivotIndex);
			pivotIndex--;
		}
	}

	_sortSector(_getArrRangeLeft(arrRange, pivotIndex));
	_sortSector(_getArrRangeRight(arrRange, pivotIndex));
}

function _getArrRangeLeft(arrRange, index) {
	var arr = arrRange.arr;
	var start = arrRange.start || 0;
	var length = arrRange.length || arr.length;

	return {
		arr: arr, 
		start: start, 
		length: index - start,
	};
}

function _getArrRangeRight(arrRange, index) {
	var arr = arrRange.arr;
	var start = arrRange.start || 0;
	var length = arrRange.length || arr.length;

	return {
		arr: arr, 
		start: index + 1, 
		length: arr.length - index - 1,
	};
}

function _getArrRangeEndIndex(arrRange) {
	var arr = arrRange.arr;
	var start = arrRange.start || 0;
	var length = arrRange.length || arr.length;

	return start + length - 1;
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
	[3, 7, 8, 5, 2, 1, 9, 5, 4], //from Wikipedia pic: https://upload.wikimedia.org/wikipedia/commons/a/af/Quicksort-diagram.svg
	[3, 7, 8, 5, 2, 1, 9, 5, 5],
	[3, 7, 8, 5, 2, 1, 9, 5, 6],
	[3, 7, 8, 5, 2, 1, 9, 5, 7],
	[3, 7, 8, 5, 2, 1, 9, 5, 8],
	[3, 7, 8, 5, 2, 1, 9, 5, 9]
];

for (var i = 0; i < testCase.length; i++) {
	console.log("=======================");
	console.log(testCase[i].join(", "));
	console.log(quickSort(testCase[i]).join(", "));
}