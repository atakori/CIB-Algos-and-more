// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	//My Solution #1

	let allNums = [];
	//endpoint initial value is size
	let startpoint= 0;
	let endpoint= size;

	while(startpoint < array.length) {
		let arr = array.slice(startpoint,endpoint);
		allNums.push(arr);
		startpoint = endpoint
		endpoint = endpoint + size
	}
	return allNums


	//Shorter Solution #1.5
	/*
	const allNums= [];
	let index= 0;

	while(index < array.length) {
		allNums.push(array.slice(index, index +size));
		index += size;
	}
	*/
	
	//Soultion #2
/*	let allNums= []
	for(let num of array) {
		const last = allNums[allNums.length -1]
		if(!last || last.length === size) {
			allNums.push([num]);
		} else {
			last.push(num)
		}
	}
	return allNums*/
}

module.exports = chunk;
