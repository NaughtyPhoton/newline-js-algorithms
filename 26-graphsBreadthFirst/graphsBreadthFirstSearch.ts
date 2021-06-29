import {Queue} from "../24-treesBreadthFirst/queue";
import {Graph} from "../25-graphsDepthFirstSearch/graph";
import {GraphVertex} from "../25-graphsDepthFirstSearch/GraphVertex";

export function breadthFirstSearch(graph: Graph, startVertex: GraphVertex, enterVertexCallback: Function) {
    const vertexQueue = new Queue();
    vertexQueue.enqueue(startVertex);
    const visitedVertices: Map<string, null> = new Map([[startVertex.getKey(), null]]);
    let currentVertex;
    while (currentVertex = vertexQueue.dequeue()) {
        enterVertexCallback(currentVertex);

        // add all neighbors to the queue for future traversals.
        currentVertex.getNeighbors().forEach((nextVertex) => {
            if (visitedVertices.has(nextVertex.getKey())) return;
            vertexQueue.enqueue(nextVertex);
            visitedVertices.set(nextVertex.getKey(), null);
        });

    }
}


