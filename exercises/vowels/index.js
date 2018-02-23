// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	/*str= str.toLowerCase();
	let arr= str.split('');
	let vowelCount= 0;
	for(let char of arr) {
		if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
			vowelCount++
		}
	}
	return vowelCount;
*/
	//Solution #2
	let vowelCount= 0;
	const vowelLetters= ['a','e', 'i','o','u'];

	for(let char of str.toLowerCase()) {
		if(vowelLetters.includes(char)) {
			vowelCount++
		}
	}
	return vowelCount;
}

module.exports = vowels;
