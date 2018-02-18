// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	//turn string into an Object with key(char)
	//and value(number) pairs

	// Solution#1
/*	let allChars= {};
	let maxChar= ''
	let max= 0;

	for(let char of str) {
		if(allChars[char]) {
			allChars[char]++;
		} else {
			allChars[char] = 1;
		}
	}
	for(let char in allChars) {
		if(allChars[char] > max) {
			max= allChars[char];
			maxChar = char
		}
	}
	return maxChar
}*/

	//Solution #2 (using reduce helper)
	let maxCount = 0
	let maxChar= '';

	let count = str.split('').reduce((acc, char) => {
		acc[char] ? acc[char]++ : acc[char] = 1

		if(acc[char] > maxCount){
			maxCount= acc[char]
			maxChar= char
		}
		return acc
	}, {})
	return maxChar
}	



module.exports = maxChar;
