// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	//Solution #1
/*	let str = n.toString();
	str= str.split('').reverse().join('')
	let reversedNum = parseInt(str, 10)
	//tests if its a negative num
	if(Math.sign(n) !== -1) {
		return reversedNum
	}
	return reversedNum *-1;
*/
	//Solution# 2 (cleaner)
	let reversed= n.toString().split('').reverse().join('');
		return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
