/**
 * Perform depth-first search (DFS) traversal of the rootNode.
 *
 * @param {BinaryTreeNode} node - The starting node to be traversed.
 * @param {Function} [visitNodeCallback] - Visiting node callback.
 */
export function depthFirstSearch(node, visitNodeCallback = () => {}) {
    // Call the visiting node callback.
    visitNodeCallback(node);

    // Traverse left branch.
    if (node.left) {
        depthFirstSearch(node.left, visitNodeCallback);
    }

    // Traverse right branch.
    if (node.right) {
        depthFirstSearch(node.right, visitNodeCallback);
    }
}
