// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	const widths= [0];
	const arr= [root, 'reset']
	while(arr.length >=2) { 
		const currentNode = arr.shift();
		if(currentNode === 'reset') {
			widths.push(0); //next row starting
			arr.push('reset')// put on end again
		} else {
		arr.push(...currentNode.children)
		widths[widths.length -1]++ //add one to last item
	}
}
return widths;

}

module.exports = levelWidth;
