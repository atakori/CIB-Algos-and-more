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

	insertFirst(data) {
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
}

module.exports = { Node, LinkedList };
