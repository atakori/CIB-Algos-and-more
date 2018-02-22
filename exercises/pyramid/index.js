// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, i=0, level='') {
	/*const midpoint= Math.floor((2*n-1)/2)
	for(let i=0; i<n; i++) {
		let level= '';
		for(let column=0; column <n*2-1; column++) {
			if(midpoint -i <= column && midpoint +i >=column) {
				level += '#';
			} else {
				level+= ' ';
			}
			i=1 col=1 mid= 2
		}
		console.log(level)
	}*/
	//Solution #2 (recursive)
	const midpoint= Math.floor((2*n-1) /2)

	if(n === i) {
		return
	}

	if((n*2-1) === level.length) {
		console.log(level);
		return pyramid(n, i+1);
	}

	if(midpoint - i <=level.length && midpoint + i >=level.length) {
		level += '#';
	} else {
		level += ' ';
	}
	pyramid(n,i, level)
}

module.exports = pyramid;
