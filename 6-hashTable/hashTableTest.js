const assert = require("assert");
const {HashTable} = require("./hashMap");

const myHashTable = new HashTable();

myHashTable.set('Sophie', 'super cute');
myHashTable.set('Maxwell', 'very very cute');
myHashTable.set('Oliver', 'not cute');

console.log(myHashTable.get('Sophie'));
console.log(myHashTable.get('Maxwell'));
console.log(myHashTable.get('Oliver'));

myHashTable.delete('Oliver');
console.log(myHashTable.get('Oliver'));

