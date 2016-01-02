function factorialRecursive(n) {

	if (n < 0) {
		return null;
	}

	if (n == 0) {
		return 1;
	}

	if (n == 1) {
		return 1;
	}
	return factorialRecursive(n - 1) * n;
}

function factorialIterative(n) {

	if (n < 0) {
		return null;
	}

	if (n == 0) {
		return 1;
	}

	var result = 1;

	for (var i = 2; i <= n; i++) {
		result = result * i;
	}
	return result;
}

var testCase = [ -1, 0, 1, 5.5, 6];

for (var i = 0; i < testCase.length; i++) {
	console.log("Recursive: " + testCase[i] + "! = " + factorialRecursive(testCase[i]));
	console.log("Iterative: " + testCase[i] + "! = " + factorialIterative(testCase[i]) + "\n");
}