var testArray = [1, 5, 2, 1, 100, 2];

function reverseArray(array) {
	var old;
	for (var i = 0; i < Math.floor(array.length / 2); i++) {
		old = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = old;
	}
	return array;
}

var reversedArray = reverseArray(testArray);

console.log(reversedArray);