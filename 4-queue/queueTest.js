const {Queue} = require("./queue");

const myQueue = new Queue();

myQueue.enqueue('Sophie');
console.log(myQueue.peek());
myQueue.enqueue('Maxwell');
console.log(myQueue.peek());
myQueue.enqueue('Gardenia');
myQueue.enqueue('Nathan');
myQueue.dequeue();
console.log(myQueue.peek());
myQueue.enqueue('Oliver');
console.log(myQueue.isEmpty());
console.log(myQueue.toString(val => val.toUpperCase()));
