// Let's create the spots on our imaginary map.
import {GraphVertex} from "../25-graphsDepthFirstSearch/GraphVertex";
import {GraphEdge} from "../25-graphsDepthFirstSearch/GraphEdge";
import {Graph} from "../25-graphsDepthFirstSearch/graph";
import {dijkstra} from "./dijkstra";

const spotHome = new GraphVertex('Home');
const spotA = new GraphVertex('A');
const spotB = new GraphVertex('B');
const spotC = new GraphVertex('C');
const spotD = new GraphVertex('D');
const spotE = new GraphVertex('E');
const spotOffice = new GraphVertex('Office');

// Now let's connect those spots with the roads of certain length.
const roadHomeA = new GraphEdge(spotHome, spotA, 5);
const roadHomeD = new GraphEdge(spotHome, spotD, 8);
const roadAB = new GraphEdge(spotA, spotB, 9);
const roadAC = new GraphEdge(spotA, spotC, 3);
const roadCB = new GraphEdge(spotC, spotB, 5);
const roadDC = new GraphEdge(spotD, spotC, 4);
const roadCE = new GraphEdge(spotC, spotE, 2);
const roadDE = new GraphEdge(spotD, spotE, 6);
const roadOfficeB = new GraphEdge(spotOffice, spotB, 7);
const roadOfficeE = new GraphEdge(spotOffice, spotE, 4);

// We will create two way roads that means that our graph will be undirected.
const isDirected = false;
const graph = new Graph(isDirected);

// Now let's add the spots and roads we've just created to the graph.
// It is like putting all the information about the spots and roads on the map.
// Remember that we don't need to add both vertices and edges between them.
// We may add only edges and vertices will be added to the graph automatically
// (for more details on Graph implementation please refer to Graphs chapter).
graph
    .addEdge(roadHomeA)
    .addEdge(roadHomeD)
    .addEdge(roadAB)
    .addEdge(roadAC)
    .addEdge(roadCB)
    .addEdge(roadDC)
    .addEdge(roadCE)
    .addEdge(roadDE)
    .addEdge(roadOfficeB)
    .addEdge(roadOfficeE);

// Now we're ready to launch the Dijkstra algorithm and figure out what are the shortest
// paths from home to  all other nodes and to the office in particular.
const {distances, previousVertices} = dijkstra(graph, spotHome);

/* eslint-disable no-console */

// Now let's print and see what are the shortest distances to every spot on the map.
console.log(distances);
/*
 The output will be:

 {
   Home: 0,
   A: 5,
   B: 13,
   C: 8,
   D: 8,
   E: 10,
   Office: 14,
 }

 Which means that the shortest distance from Home to Office is 14.
 */

// And now when we now the shortest distance from Home to the Office
// let's figure out what is the shortest path that has a shortest distance.
console.log(previousVertices.get('Office').toString()); // -> 'E'
console.log(previousVertices.get('E').toString()); // -> 'C'
console.log(previousVertices.get('C').toString()); // -> 'A'
console.log(previousVertices.get('A').toString()); // -> 'Home'

// So the shortest path from Home to Office is:
// Home -> A -> C -> E -> Office
