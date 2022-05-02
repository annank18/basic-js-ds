const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {  
  constructor() {
  this.length = 0;
  this.head = null;
  this.tail = null;
}

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
		return this.head;
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const item =  new ListNode(value); 
		if (this.head) { 
			this.tail.next = item; 
			this.tail = item; 
		} else { 
			this.head = item; 
			this.tail = item; 
		}
		this.length++;
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const item = this.head;
		this.head = this.head.next;
		this.length--;
		return item.value;
  }
}

class ListNode {
	constructor(value) {
	this.value = value;
	this.next = null;
	}
}

module.exports = {
  Queue
};