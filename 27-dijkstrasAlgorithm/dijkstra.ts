import {Graph} from "../25-graphsDepthFirstSearch/graph";
import {GraphVertex} from "../25-graphsDepthFirstSearch/GraphVertex";
import {PriorityQueue} from "./priorityQueue";
import {GraphEdge} from "../25-graphsDepthFirstSearch/GraphEdge";

type ShortestPaths = {
    distances: Map<string, number>,
    previousVertices: Map<string, GraphVertex>
}

export function dijkstra(graph: Graph, startVertex: GraphVertex): ShortestPaths {
    // holds the shortest distances to each vertex from the startVertex
    const distances: Map<string, number> = new Map();

    // Keeps track of visited vertices to avoid visiting them a second time.
    const visitedVertices: Map<string, null> = new Map();

    // Tracks which vertex was the previous one to the current one in order to form the shortest path
    const previousVertices: Map<string, GraphVertex> = new Map();

    // Tracks which vertex to visit next
    const queue: PriorityQueue<GraphVertex> = new PriorityQueue();

    // init all distances with infinity
    graph.getAllVertices().forEach(vertex => {
        distances.set(vertex.getKey(), Infinity);
        distances.set(vertex.getKey(), null);
    });

    // init the startVertex distance to 0
    distances.set(startVertex.getKey(), 0);

    // init the queue with the startVertex
    queue.add(startVertex, 0);

    while (!queue.isEmpty()) {
        // Fetch the closest vertex
        const currentVertex = queue.poll();

        // Iterate over every unvisited neighbor
        currentVertex.getNeighbors().forEach(neighbor => {
            if (visitedVertices.get(neighbor.getKey())) return;
            const edgeWeight = neighbor.edge.weight;
            const existingDistanceToNeighbor = distances.get(neighbor.getKey());
            const distanceToNeighborFromCurrent = distances.get(currentVertex.getKey()) + edgeWeight;

            // If we found shorter path, update it
            if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
                distances.set(neighbor.getKey(), distances.get(neighbor.getKey()));

                // Change the priority of neighbor in queue
                if (queue.has(neighbor)) {
                    queue.changePriority(neighbor, distances.get(neighbor.getKey()));
                }
            }

            // Remember previous closest vertex
            previousVertices.set(neighbor.getKey(), currentVertex);

            // Add neighbor to the queue for further visiting
            if (!queue.has(neighbor)) {
                queue.add(neighbor, distances.get(neighbor.getKey()));
            }
        });

        visitedVertices.set(currentVertex.getKey(), null);
    }


    return {distances, previousVertices};
}
