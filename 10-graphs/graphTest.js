const {GraphEdge} = require("./GraphEdge");
const {GraphVertex} = require("./GraphVertex");
const {Graph} = require("./Graph");


// Create a network.
const network = new Graph();

// Create users.
const bill = new GraphVertex('Bill');
const mary = new GraphVertex('Mary');
const john = new GraphVertex('John');
const jane = new GraphVertex('Jane');

// Register users in our network.
network
    .addVertex(bill)
    .addVertex(mary)
    .addVertex(john)
    .addVertex(jane);

console.log(network.toString());

// Check if users have been registered successfully.
console.log(network.getVertexByKey('Bill')); // -> bill
console.log(network.getVertexByKey('Mary')); // -> mary

// Establish friendship connections.
network
    .addEdge(new GraphEdge(bill, mary))
    .addEdge(new GraphEdge(john, jane))
    .addEdge(new GraphEdge(jane, mary));

// Check if specific users are friends.
console.log(network.findEdge(bill, mary)); // -> GraphEdge entity
console.log(network.findEdge(john, jane)); // -> GraphEdge entity
console.log(network.findEdge(bill, john)); // -> null

// Get all friends of specific user.
// eslint-disable-next-line no-unused-expressions
console.log(mary.getNeighbors().length); // -> 2
console.log(mary.getNeighbors()); // -> [bill, jane]
