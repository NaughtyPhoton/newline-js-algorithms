const {LinkedList} = require("../3-linkedList/linkedList");
const {hash} = require('./hashFunction');

const HASH_BUCKET_SIZE = 32;

class HashTable {
    constructor(bucketSize = HASH_BUCKET_SIZE) {
        this.bucketSize = bucketSize;
        this.buckets = Array(this.bucketSize).fill(null).map(() => new LinkedList());
    }

    _getLinkedListForKey(key) {
        const keyHash = hash(key, this.bucketSize);
        return this.buckets[keyHash];
    }

    _getNodeFromLinkedList(linkedList, key) {
        return linkedList.find({callback: node => node.key === key});
    }

    set(key, value) {
        const linkedList = this._getLinkedListForKey(key);
        const node = this._getNodeFromLinkedList(linkedList, key);

        if (!node) {
            linkedList.append({key, value})
        } else {
            node.value.value = value;
        }
    }

    get(key) {
        const linkedList = this._getLinkedListForKey(key);
        const node = this._getNodeFromLinkedList(linkedList, key);
        return node ? node.value.value : undefined;
    }

    delete(key) {
        const linkedList = this._getLinkedListForKey(key);
        const node = this._getNodeFromLinkedList(linkedList, key);
        if (node) {
            linkedList.delete(node.value);
            return true;
        }
        return false;
    }
}

module.exports = {HashTable};
