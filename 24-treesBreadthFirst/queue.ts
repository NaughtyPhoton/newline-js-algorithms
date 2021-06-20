import {LinkedList, LinkedListNode} from "./linkedList";

export class Queue {
    linkedList: LinkedList;

    constructor() {
        this.linkedList = new LinkedList();
    }

    enqueue(value) {
        this.linkedList.append(value);
    }

    dequeue() {
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    peek() {
        return this.linkedList.head ? this.linkedList.head.value : null;
    }

    isEmpty() {
        return !this.linkedList.head;
    }

    toString(callback) {
        return this.linkedList.toString(callback);
    }
}
