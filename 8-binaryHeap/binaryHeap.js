const {Comparator} = require("./comparator");

class MinHeap {
    /**
     * @param {Function} comparatorFunction
     */
    constructor(comparatorFunction = null) {
        // Array representation of the heap
        this.heapContainer = [];

        // A map of heap elements for fast lookup
        this.heapElements = new Map();

        this.compare = new Comparator(comparatorFunction);
    }

    /**
     * @return {null|*}
     */
    peek() {
        if (!this.heapContainer.length) return null;
        return this.heapContainer[0];
    }

    /**
     * @return {null|*}
     */
    poll() {
        if (!this.heapContainer.length) return null;
        if (this.heapContainer.length === 1) return this.heapContainer.pop();
        const item = this.heapContainer[0];
        this.heapContainer[0] = this.heapContainer.pop();
        this.heapifyDown();
        return item;
    }

    /**
     * @param {*} item
     * @return {MinHeap}
     */
    add(item) {
        this.heapContainer.push(item);
        this.heapElements.set(item, item);
        this.heapifyUp();
        return this;
    }

    remove(item, comparator = this.compare) {
        const numberOfItemsToRemove = this.find(item, comparator).length;
        this.heapElements.delete(item);
        for (let iteration = 0; iteration < numberOfItemsToRemove; iteration++) {
            const indexToRemove = this.find(item, comparator).pop();
            if (indexToRemove === (this.heapContainer.length - 1)) this.heapContainer.pop();
            else {
                this.heapContainer[indexToRemove] = this.heapContainer.pop();
                const parentItem = this.parent(indexToRemove);
                if (
                    this.hasLeftChild(indexToRemove) &&
                    (!parentItem || parentItem < this.heapContainer[indexToRemove])
                ) {
                    this.heapifyDown(indexToRemove);
                } else {
                    this.heapifyUp(indexToRemove);
                }
            }
        }

        return this;
    }

    /**
     * @param {number|null} customStartIndex
     */
    heapifyUp(customStartIndex = null) {
        let currentIndex = customStartIndex || this.heapContainer.length - 1;

        const p = this.parent(currentIndex);
        const h = this.heapContainer[currentIndex];

        while (
            this.hasParent(currentIndex) &&
            this.compare.greaterThan(this.parent(currentIndex), this.heapContainer[currentIndex])
            ) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    /**
     * @param {number} customStartIndex
     */
    heapifyDown(customStartIndex = 0) {
        let currentIndex = customStartIndex;
        let nextIndex = null;

        while (this.hasLeftChild(currentIndex)) {
            if (
                this.hasRightChild(currentIndex) &&
                this.compare.lessThanOrEqual(this.rightChild(currentIndex), this.leftChild(currentIndex))
            ) {
                nextIndex = this.getRightChildIndex(currentIndex);
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex);
            }

            if (this.compare.lessThanOrEqual(
                this.heapContainer[currentIndex],
                this.heapContainer[nextIndex]
            )) {
                break;
            }

            this.swap(currentIndex, nextIndex);
            currentIndex = nextIndex;
        }
    }

    /**
     * @param {number} parentIndex
     * @returns {number}
     */
    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    /**
     * @param {number} parentIndex
     * @returns {number}
     */
    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }

    /**
     * @param {number} childIndex
     * @returns {number}
     */
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    /**
     * @param {number} childIndex
     * @return {boolean}
     */
    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    /**
     * @param {*} item
     * @return {boolean}
     */
    has(item) {
        return !!this.heapElements.get(item);
    }

    /**
     * @param {number} parentIndex
     * @return {boolean}
     */
    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }

    /**
     * @param {number} parentIndex
     * @return {boolean}
     */
    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }

    /**
     * @param {number} parentIndex
     * @return {*}
     */
    leftChild(parentIndex) {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    }

    /**
     * @param {number} parentIndex
     * @return {*}
     */
    rightChild(parentIndex) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }

    /**
     * @param childIndex
     * @return {*}
     */
    parent(childIndex) {
        return this.heapContainer[this.getParentIndex(childIndex)];
    }

    /**
     * @param {number} indexOne
     * @param {number} indexTwo
     */
    swap(indexOne, indexTwo) {
        const tmp = this.heapContainer[indexTwo];
        this.heapContainer[indexTwo] = this.heapContainer[indexOne];
        this.heapContainer[indexOne] = tmp;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return !this.heapContainer.length;
    }

    /**
     * @param {*} item
     * @param {Comparator} comparator
     * @return {number[]}
     */
    find(item, comparator = this.compare) {
        const foundItemIndices = [];
        for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex++) {
            if (comparator.equal(item, this.heapContainer[itemIndex])) {
                foundItemIndices.push(itemIndex);
            }
        }
        return foundItemIndices;
    }

    /**
     * @param {Function} cb
     * @return {string}
     */
    toString(cb = null) {
        if (cb) return this.heapContainer.map(cb).toString();
        else return this.heapContainer.toString();
    }
}


module.exports = {MinHeap};
