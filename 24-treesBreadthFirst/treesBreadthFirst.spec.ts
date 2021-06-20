import {BinaryTreeNode} from "./binaryTreeNode";
import {breadthFirstSearch} from "./treesBreadthFirst";

describe('Binary Tree Breadth First', () => {

    // Create tree nodes.
    const nodeA = new BinaryTreeNode('A');
    const nodeB = new BinaryTreeNode('B');
    const nodeC = new BinaryTreeNode('C');
    const nodeD = new BinaryTreeNode('D');
    const nodeE = new BinaryTreeNode('E');

    nodeA.setLeft(nodeB).setRight(nodeC);
    nodeB.setLeft(nodeD).setRight(nodeE);

    const traversedNodes = [];

    // Create visiting node callback.
    const visitNodeCallback = (visitedNode) => {
        // Once we visit the node let's add it to the list of traversed nodes.
        traversedNodes.push(visitedNode);
    };

    // Perform breadth-first tree traversal.
    breadthFirstSearch(nodeA, visitNodeCallback);

    test('Nodes traversed in correct order', () => {
        expect(traversedNodes).toEqual([
            nodeA, nodeB, nodeC, nodeD, nodeE,
        ]);
    });
});
