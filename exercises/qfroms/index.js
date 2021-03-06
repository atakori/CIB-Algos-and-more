// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
	constructor() {
		this.first= new Stack();
		this.second= new Stack();
	}

	add(record) {
		this.first.push(record)
	}

	remove(){
		//if there is still something inside
		while(this.first.peek()) {
			const recordA = this.first.pop();
			this.second.push(recordA);
		}

		//get the record that we want
		const lastRecord= this.second.pop();

		while(this.second.peek()){
			const recordB = this.second.pop();
			this.first.push(recordB);
		}

		return lastRecord;
	}

	peek(){
		while(this.first.peek()){
			const recordA= this.first.pop();
			this.second.push(recordA)
		}
		const peekedItem= this.second.peek()

		while(this.second.peek()) {
			const recordB= this.second.pop();
			this.first.push(recordB);
		}

		return peekedItem;
	}
}

module.exports = Queue;
