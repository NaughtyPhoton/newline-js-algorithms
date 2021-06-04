const {MinHeap} = require("./binaryHeap");

const minHeap = new MinHeap((item1, item2) => {
    console.log('');
    return item1.priority - item2.priority;
});

minHeap.add({name: 'job1', priority: 5});
minHeap.add({name: 'job2', priority: 1});
minHeap.add({name: 'job3', priority: 10});
minHeap.add({name: 'job4', priority: 4});
minHeap.add({name: 'job5', priority: 5});

console.log(minHeap.toString(item => item.name));

minHeap.remove(4);
minHeap.remove(5);
console.log(minHeap.find(1));

console.log(minHeap.toString(item => item.name));
