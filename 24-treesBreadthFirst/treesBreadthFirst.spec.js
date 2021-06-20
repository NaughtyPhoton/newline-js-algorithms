"use strict";
exports.__esModule = true;
var binaryTreeNode_1 = require("./binaryTreeNode");
var treesBreadthFirst_1 = require("./treesBreadthFirst");
describe('Binary Tree Breadth First', function () {
    // Create tree nodes.
    var nodeA = new binaryTreeNode_1.BinaryTreeNode('A');
    var nodeB = new binaryTreeNode_1.BinaryTreeNode('B');
    var nodeC = new binaryTreeNode_1.BinaryTreeNode('C');
    var nodeD = new binaryTreeNode_1.BinaryTreeNode('D');
    var nodeE = new binaryTreeNode_1.BinaryTreeNode('E');
    nodeA.setLeft(nodeB).setRight(nodeC);
    nodeB.setLeft(nodeD).setRight(nodeE);
    var traversedNodes = [];
    // Create visiting node callback.
    var visitNodeCallback = function (visitedNode) {
        // Once we visit the node let's add it to the list of traversed nodes.
        traversedNodes.push(visitedNode);
    };
    // Perform breadth-first tree traversal.
    treesBreadthFirst_1.breadthFirstSearch(nodeA, visitNodeCallback);
    test('Nodes traversed in correct order', function () {
        expect(traversedNodes).toEqual([
            nodeA, nodeB, nodeC, nodeD, nodeE,
        ]);
    });
});
