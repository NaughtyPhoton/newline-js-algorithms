export class BinaryTreeNode {
    /**
     * @param {*} [value]
     */
    constructor(value = null) {
        this.left = null;
        this.right = null;
        this.value = value;
    }

    /**
     * @param {BinaryTreeNode} node
     */
    setLeft(node) {
        this.left = node;
        return this;
    }
    /**
     * @param {BinaryTreeNode} node
     */
    setRight(node) {
        this.right = node;
        return this;
    }
}
