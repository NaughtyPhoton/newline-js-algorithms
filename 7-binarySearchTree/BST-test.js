const {BinarySearchTree} = require("./binarySearchTree");


const bst = new BinarySearchTree();
bst.insert(5, 'Nathan');
bst.insert(10, 'Sophie');
bst.insert(2, 'Maxwell');

console.log(bst.toString());
console.log(bst.findMax());
console.log(bst.findMin());
console.log(bst.contains(5));
