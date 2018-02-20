// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
/*  let charMapA= {}
  let charMapB= {}

  let str1= strA.replace(/[^\w]/g, "");
  let str2= strB.replace(/[^\w]/g, "");
  
  for(let char of str1) {
  	if(charMapA[char]) {
    	charMapA[char]++
    } else {
    	charMapA[char]= 1
    }
  }
  
  for(let char of str2) {
  	if(charMapB[char]) {
    	charMapB[char]++
    } else {
    	charMapB[char]= 1
    }
  }
  //made charMaps | now compare them
  if(str1.length === str2.length && ) {
  
  } else {
  
  }
  */

  //Solution #1
  const aCharMap= buildCharMap(stringA);
  const bCharMap= buildCharMap(stringB);

  //checking for extra keys
  if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
  	return false
  } else {
  	for(let char in aCharMap) {
  		if(aCharMap[char] !== bCharMap[char]) {
  			return false
  		} 
  	}
  	return true;
  }

}

function buildCharMap(str) {
	const charMap= {};

	for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
		charMap[char] ? charMap[char]++ : charMap[char] =1
	}
	return charMap;
}

module.exports = anagrams;
