class BinarySearchTreeNode {
    constructor(value = null, data = null) {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = value;
        this.data = data;
    }

    find(value) {
        if (this.value === value) {
            return this;
        }

        if (value < this.value && this.left) {
            return this.left.find(value);
        }

        if (value > this.value && this.right) {
            return this.right.find(value);
        }

        return null;
    }

    insert(value, data) {
        if (this.value === null) {
            this.value = value;
            this.data = data;
            return this;
        }

        if (value < this.value) {
            if (this.left) {
                return this.left.insert(value, data);
            }

            const newNode = new BinarySearchTreeNode(value, data);
            this.setLeft(newNode);
            return newNode;
        }

        if (value > this.value) {
            if (this.right) {
                return this.right.insert(value, data);
            }

            const newNode = new BinarySearchTreeNode(value, data);
            this.setRight(newNode);
            return newNode;
        }

        return this;
    }

    remove(value) {
        const nodeToRemove = this.find(value);
        if (!nodeToRemove) {
            throw new Error('Item not found in the tree');
        }
        const {parent} = nodeToRemove;
        if (!nodeToRemove.left && !nodeToRemove.right) {
            if (parent) {
                parent.removeChild(nodeToRemove);
            } else {
                nodeToRemove.setValue(undefined);
            }
        } else if (nodeToRemove.left && nodeToRemove.right) {
            const nextBiggerNode = nodeToRemove.right.findMin();
            if (nextBiggerNode !== nodeToRemove.right) {
                this.remove(nextBiggerNode.value);
                nodeToRemove.setValue(nextBiggerNode.value);
            } else {
                nodeToRemove.setValue(nodeToRemove.right.value);
                nodeToRemove.setRight(nodeToRemove.right.value);
            }
        } else {
            const childNode = nodeToRemove.left || nodeToRemove.right;

            if (parent) {
                parent.replaceChild(nodeToRemove, childNode);
            } else {
                BinarySearchTreeNode.copyNode(childNode, nodeToRemove);
            }
        }
    }

    traverseInOrder() {
        let traverse = [];
        if (this.left) {
            traverse = traverse.concat(this.left.traverseInOrder());
        }

        traverse.push(this.value);

        if (this.right) {
            traverse = traverse.concat(this.right.traverseInOrder());
        }

        return traverse;
    }

    setLeft(node) {
        if (this.left) {
            this.left.parent = null;
        }
        this.left = node;
        if (this.left) {
            this.left.parent = this;
        }
        return this;
    }

    setRight(node) {
        if (this.right) {
            this.right.parent = null;
        }
        this.right = node;
        if (this.right) {
            this.right.parent = this;
        }
        return this;
    }

    setData(data) {
        this.data = data;
        return this;
    }

    setValue(value) {
        this.value = value;
        return this;
    }

    contains(value) {
        return !!this.find(value);
    }

    removeChild(nodeToRemove) {
        if (this.left && this.left === nodeToRemove) {
            this.left = null;
            return true;
        }

        if (this.right && this.right === nodeToRemove) {
            this.right = null;
            return true;
        }
        return false;
    }

    replaceChild(nodeToReplace, replacementNode) {
        if (!nodeToReplace || !replacementNode) {
            return false;
        }
        if (this.left && this.left === nodeToReplace) {
            this.left = replacementNode;
            return true;
        }
        if (this.right && this.right === nodeToReplace) {
            this.right = replacementNode;
            return true;
        }
        return false;
    }

    static copyNode(sourceNode, targetNode) {
        targetNode.setValue(sourceNode.value);
        targetNode.setData(sourceNode.data);
        targetNode.setRight(sourceNode.right);
        targetNode.setLeft(sourceNode.left);
    }

    findMin() {
        if (!this.left) {
            return this;
        }
        return this.left.findMin();
    }

    findMax() {
        if (!this.right) {
            return this;
        }
        return this.right.findMax();
    }

    toString() {
        return this.traverseInOrder().toString();
    }
}

class BinarySearchTree {
    constructor() {
        this.root = new BinarySearchTreeNode(null);
    }

    find(value) {
        return this.root.find(value);
    }

    findMin() {
        return this.root.findMin();
    }

    findMax() {
        return this.root.findMax();
    }

    insert(value, data=null) {
        return this.root.insert(value, data);
    }

    contains(value) {
        return this.root.contains(value);
    }

    remove(value) {
        return this.root.remove(value);
    }

    toString() {
        return this.root.toString();
    }
}

module.exports = {BinarySearchTree};
