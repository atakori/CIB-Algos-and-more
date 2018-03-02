// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

}

function selectionSort(arr) {

}

function mergeSort(arr) {
	if(arr.length === 1) {
		return arr;
	}

	const center= Math.floor(arr.length /2);
	const left = arr.slice(0, center);
	//left does not include arr[center]
	const right= arr.slice(center/*, arr.length*/);

	return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right) {
	const results= [];
	//check to see if either has values in the arrays
	while(left.length && right.length) {
		if(left[0] < right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}

	return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort };
