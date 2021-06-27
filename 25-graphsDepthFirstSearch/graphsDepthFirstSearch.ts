
import {Graph} from "./graph";
import {GraphVertex} from "./GraphVertex";

/**
 * Traverse the graph in depth-first manner.
 *
 * @param {Graph} graph - Graph that is going to be traversed.
 * @param {GraphVertex} startVertex - Vertex that we will use as a starting point.
 * @param {function} enterVertexCallback - Callback that will be called on every vertex visit.
 */
export function depthFirstSearch(graph: Graph, startVertex: GraphVertex, enterVertexCallback: Function) {
    const visitedVertices: Map<string, null> = new Map();

    const depthFirstSearchRecursive = (currentVertex: GraphVertex) => {
        enterVertexCallback(currentVertex);

        currentVertex
            .getNeighbors()
            .forEach((nextVertex) => {
                if (!visitedVertices.has(nextVertex.getKey() as string)) {
                    visitedVertices.set(nextVertex.getKey(), null);
                    depthFirstSearchRecursive(nextVertex);
                }
            });
    };
    depthFirstSearchRecursive(startVertex);
}


