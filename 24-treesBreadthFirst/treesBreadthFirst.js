"use strict";
exports.__esModule = true;
exports.breadthFirstSearch = void 0;
var queue_1 = require("./queue");
function breadthFirstSearch(rootNode, visitNodeCallback) {
    if (visitNodeCallback === void 0) { visitNodeCallback = function (n) { }; }
    // Do initial queue setup.
    // We need to add a rootNode to the queue first to start the
    // traversal process from it.
    var nodeQueue = new queue_1.Queue();
    nodeQueue.enqueue(rootNode);
    // Visit all the nodes of the queue until the queue is empty.
    while (!nodeQueue.isEmpty()) {
        // Fetch the next node to visit.
        var currentNode = nodeQueue.dequeue();
        // Call the visiting node callback.
        visitNodeCallback(currentNode);
        // Add left node to the traversal queue.
        if (currentNode.left) {
            nodeQueue.enqueue(currentNode.left);
        }
        // Add right node to the traversal queue.
        if (currentNode.right) {
            nodeQueue.enqueue(currentNode.right);
        }
    }
}
exports.breadthFirstSearch = breadthFirstSearch;
