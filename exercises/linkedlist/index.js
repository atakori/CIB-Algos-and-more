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
		let currentNode = new Node(data);
		if(this.head) {
			//need to switch head and currentNode
			let firstNode = this.head;
			currentNode.next = firstNode;
			this.head = currentNode;
		} else {
			this.head = currentNode;
		}
	}

	/*OR  this.head= newNode(data, this.head)*/

	size() {
		//returns the number of nodes in a linkedList
		let counter = 0;
		let currentNode= this.head; 
		while(currentNode) {
			counter++;
			currentNode = currentNode.next;
		}
		return counter;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if(!this.head) {
			return null;
		}
		//start from top, iterate through list
		//return final value
		let currentNode = this.head;
		while(currentNode.next) {
			currentNode = currentNode.next
		}
		return currentNode;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if(!this.head) {
			return;
		}
		let firstNode = this.head;
		this.head = firstNode.next;
	}
}

module.exports = { Node, LinkedList };
