// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data,next = null){
		this.data=data;
		this.next= next
	}
}

class LinkedList {
	constructor(){
		this.head= null;
	}

	insertFirst(data /*,this.head*/) {
		let newNode= new Node(data)
		if(this.head === null) {
			this.head= newNode;
		} else {
			//switch places with the newNode and the "first" node
			let firstNode = this.head;
			this.head = newNode;
			newNode.next = firstNode;
		}
	}
	/*OR  this.head= newNode(data, this.head)*/

	size() {
		//returns the number of nodes in list
		let counter= 0;
		let currentNode= this.head;
		while(currentNode) {
			currentNode= currentNode.next;
			counter++;
		}

		return counter;
	}

	getFirst() {
		return this.head;
	}
}

module.exports = { Node, LinkedList };
