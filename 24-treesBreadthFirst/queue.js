"use strict";

exports.__esModule = true;
exports.Queue = void 0;
var linkedList_1 = require("./linkedList");
var Queue = /** @class */ (function () {
    function Queue() {
        this.linkedList = new linkedList_1.LinkedList();
    }
    Queue.prototype.enqueue = function (value) {
        this.linkedList.append(value);
    };
    Queue.prototype.dequeue = function () {
        var removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    };
    Queue.prototype.peek = function () {
        return this.linkedList.head ? this.linkedList.head.value : null;
    };
    Queue.prototype.isEmpty = function () {
        return !this.linkedList.head;
    };
    Queue.prototype.toString = function (callback) {
        return this.linkedList.toString(callback);
    };
    return Queue;
}());
exports.Queue = Queue;
