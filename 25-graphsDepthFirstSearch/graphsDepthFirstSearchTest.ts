// Create a demo-version of our overly-simplified social network.
import {Graph} from "./graph";
import {GraphVertex} from "./GraphVertex";
import {GraphEdge} from "./GraphEdge";
import {depthFirstSearch} from "./graphsDepthFirstSearch";

const socialNetwork = new Graph();

// Let's register several users in our network.
const bill = new GraphVertex('Bill');
const alice = new GraphVertex('Alice');
const john = new GraphVertex('John');
const kate = new GraphVertex('Kate');
const ann = new GraphVertex('Ann');
const tom = new GraphVertex('Tom');
const sam = new GraphVertex('Sam');

// Now let's establish friendship connections between the users of our network.
socialNetwork
    .addEdge(new GraphEdge(bill, alice))
    .addEdge(new GraphEdge(bill, john))
    .addEdge(new GraphEdge(bill, kate))
    .addEdge(new GraphEdge(alice, ann))
    .addEdge(new GraphEdge(ann, sam))
    .addEdge(new GraphEdge(john, ann))
    .addEdge(new GraphEdge(kate, tom));

// Now let's traverse the network in depth-first manner staring from Bill
// and add all users we will encounter to the userVisits array.
const userVisits = [];

depthFirstSearch(socialNetwork, bill, user => userVisits.push(user));

// Now let's see in what order the users have been traversed.
// eslint-disable-next-line no-console
// console.log(userVisits);
userVisits.toString() //?
/*
  The output will be:
  [bill, alice, ann, sam, john, kate, tom]
*/


