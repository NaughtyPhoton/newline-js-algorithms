export class LinkedListNode {
    value: any;
    next: LinkedListNode;

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    /**
     * @param {Function} callback
     * @returns {*|string}
     */
    toString(callback = null) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}
export class LinkedList {
    head: LinkedListNode;
    tail: LinkedListNode;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param value
     * @returns {LinkedList}
     */
    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        if (!this.tail) this.tail = newNode;
        return this;
    }

    /**
     * @param value
     * @returns {LinkedList}
     */
    append(value) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this;
    }

    /**
     * @param value
     * @returns {LinkedListNode|null}
     */
    delete(value) {
        if (!this.head) return null;
        let deletedNode = null;

        while (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.tail.value === value) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    /**
     * @returns {LinkedListNode}
     */
    deleteTail() {
        const deletedTail = this.tail;

        // If there is only one node in list..
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return deletedTail;
        }

        // If there are multiple nodes in list,
        // need to traverse entire list to set a new tail.
        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) currentNode.next = null;
            else currentNode = currentNode.next;
        }
        this.tail = currentNode;
        return deletedTail;
    }

    /**
     * @returns {LinkedListNode|null}
     */
    deleteHead() {
        if (!this.head) return null;

        const deletedHead = this.head;

        if (this.head.next) this.head = this.head.next;
        else {
            // There was only one node in the list.. delete it.
            this.head = null;
            this.tail = null;
        }
        return deletedHead;
    }

    /**
     * Takes either a value or a predicate (true | false) callback to compare values to find.
     * @param value
     * @param {Function} callback
     * @returns {LinkedListNode|null}
     */
    find({value = undefined, callback = undefined}) {
        if (!this.head) return null;

        let currentNode = this.head;
        while (currentNode) {
            if (callback && callback(currentNode.value)) return currentNode;
            if (value !== undefined && currentNode.value === value) return currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }

    /**
     * @returns {LinkedListNode[]}
     */
    toArray() {
        const nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }

    /**
     * @param callback
     * @returns {string}
     */
    toString(callback) {
        return this.toArray().map(node => node.toString(callback)).toString();
    }

    * [Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }
}

module.exports = {LinkedList, LinkedListNode};
