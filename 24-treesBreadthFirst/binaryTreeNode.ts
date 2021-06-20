export class BinaryTreeNode {
    left: BinaryTreeNode;
    right: BinaryTreeNode;
    value: any;

    constructor(value: any = null) {
        this.left = null;
        this.right = null;
        this.value = value;
    }

    setLeft(node: BinaryTreeNode) {
        this.left = node;
        return this;
    }

    setRight(node: BinaryTreeNode) {
        this.right = node;
        return this;
    }
}
