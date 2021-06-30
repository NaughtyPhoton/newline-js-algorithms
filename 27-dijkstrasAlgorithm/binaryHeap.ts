import {Comparator} from "./comparator";

type Mappable<T> = (val: T) => {}

export class MinHeap<T> {
    private readonly heapContainer: any[];
    private heapElements: Map<any, T>;
    protected compare: Comparator;

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

    peek(): T {
        if (!this.heapContainer.length) return null;
        return this.heapContainer[0];
    }

    poll(): T {
        if (!this.heapContainer.length) return null;
        if (this.heapContainer.length === 1) return this.heapContainer.pop();
        const item = this.heapContainer[0];
        this.heapContainer[0] = this.heapContainer.pop();
        this.heapifyDown();
        return item;
    }

    add(item: T): MinHeap<T> {
        this.heapContainer.push(item);
        this.heapElements.set(item, item);
        this.heapifyUp();
        return this;
    }

    remove(item: T, comparator = this.compare) {
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

    heapifyUp(customStartIndex: number = null) {
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

    getLeftChildIndex(parentIndex: number): number {
        return (2 * parentIndex) + 1;
    }

    getRightChildIndex(parentIndex: number): number {
        return (2 * parentIndex) + 2;
    }

    getParentIndex(childIndex: number): number {
        return Math.floor((childIndex - 1) / 2);
    }

    hasParent(childIndex: number): boolean {
        return this.getParentIndex(childIndex) >= 0;
    }

    has(item: T): boolean {
        return !!this.heapElements.get(item);
    }

    hasLeftChild(parentIndex: number): boolean {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }

    hasRightChild(parentIndex: number): boolean {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }

    leftChild(parentIndex: number): T {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    }

    rightChild(parentIndex: number): T {
        return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }

    parent(childIndex: number): T {
        return this.heapContainer[this.getParentIndex(childIndex)];
    }

    swap(indexOne: number, indexTwo: number) {
        const tmp = this.heapContainer[indexTwo];
        this.heapContainer[indexTwo] = this.heapContainer[indexOne];
        this.heapContainer[indexOne] = tmp;
    }

    isEmpty(): boolean {
        return !this.heapContainer.length;
    }

    find(item: T, comparator = this.compare): number[] {
        const foundItemIndices = [];
        for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex++) {
            if (comparator.equal(item, this.heapContainer[itemIndex])) {
                foundItemIndices.push(itemIndex);
            }
        }
        return foundItemIndices;
    }

    toString(cb: Mappable<T> = null): string {
        if (cb) return this.heapContainer.map(cb).toString();
        else return this.heapContainer.toString();
    }
}

