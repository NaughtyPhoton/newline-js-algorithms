const {LinkedList} = require("./linkedList");

const list = new LinkedList();
list.append('Nathan');
list.append('Garden');
list.append('Maxwell');
list.append('Sophie');
list.append('Oliver');

for (let val of list) console.log(val); // => Nathan Garden Maxwell Sophie Oliver

