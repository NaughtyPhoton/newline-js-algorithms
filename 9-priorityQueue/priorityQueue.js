const {MinHeap} = require("../8-binaryHeap/binaryHeap");
const {Comparator} = require("../8-binaryHeap/comparator");

class PriorityQueue extends MinHeap {
    constructor() {
        super();
        this.priorities = new Map();
        this.compare = new Comparator(this.comparePriority.bind(this));
    }

    comparePriority(a, b) {
        if (this.priorities.get(a) === this.priorities.get(b)) {
            return 0;
        }
        return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
    }

    compareValue(a, b) {
        if (a === b) return 0;
        return a < b ? -1 : 1;
    }

    add(item, priority = 0) {
        this.priorities.set(item, priority);
        super.add(item);
        return this;
    }

    remove(item, customFindingComparator) {
        super.remove(item, customFindingComparator);
        this.priorities.delete(item);
        return this;
    }

    changePriority(item, priority) {
        this.remove(item, new Comparator(this.compareValue));
        this.add(item, priority);
        return this;
    }
}

module.exports = {PriorityQueue};
