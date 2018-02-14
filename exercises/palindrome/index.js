// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	//Solution #1
	/*let reverseStr = str.split('').reverse().join('');
	if(str === reverseStr) {
		return true	
	} 
	return false*/

	// or instead of if statement => return str ===reverseStr

	//Solution #2 (No .reverse())
/*	let reversedStr= '';
	for (let char of str) {
		reversedStr = char + reversedStr 
	}
	if(str === reversedStr) {
		return true
	}
	return false;*/
	
	//Solution #3 
	return str.split('').every((char, index) => {
		return char === str[str.length - index -1]
	})
}

module.exports = palindrome;
