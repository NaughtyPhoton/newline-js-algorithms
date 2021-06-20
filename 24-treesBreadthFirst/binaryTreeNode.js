"use strict";
exports.__esModule = true;
exports.BinaryTreeNode = void 0;
var BinaryTreeNode = /** @class */ (function () {
    function BinaryTreeNode(value) {
        if (value === void 0) { value = null; }
        this.left = null;
        this.right = null;
        this.value = value;
    }
    BinaryTreeNode.prototype.setLeft = function (node) {
        this.left = node;
        return this;
    };
    BinaryTreeNode.prototype.setRight = function (node) {
        this.right = node;
        return this;
    };
    return BinaryTreeNode;
}());
exports.BinaryTreeNode = BinaryTreeNode;
