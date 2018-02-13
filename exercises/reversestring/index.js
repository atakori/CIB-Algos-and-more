// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
/*	Solution #1 let strArray= str.split('').reverse()
	return strArray.join('')
*/
	/*Solution#2*/
/*	let newArray= [];
	let strArray= str.split('');
	for(let i=strArray.length -1; i>= 0; i--) {
		newArray.push(strArray[i])
	}
	return newArray.join('')*/

	/*Solution#3*/
/*	let reversedStr= '';
	for(let character of str) {
		reversedStr = character + reversedStr;
	}
	return reversedStr;*/

	/*Solution#4*/
	return str.split('').reduce((rev, char) => char + rev
	, '')
}

module.exports = reverse;
