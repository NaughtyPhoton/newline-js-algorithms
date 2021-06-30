import {LinkedList} from "./linkedList";

type GraphVertexWithEdgeWeight = GraphVertex & {edge: {weight: number}}

export class GraphVertex {
    private value: any;
    private edges: any;

    constructor(value) {
        this.value = value;
        this.edges = new LinkedList();
    }

    addEdge(edge) {
        this.edges.append(edge);
        return this;
    }

    deleteEdge(edge) {
        this.edges.delete(edge);
    }

    getEdges() {
        return this.edges.toArray().map(linkedListNode => linkedListNode.value);
    }

    hasEdge(requiredEdge) {
        const edgeNode = this.edges.find({callback: edge => edge === requiredEdge});
        return !!edgeNode;
    }

    getNeighbors(): GraphVertexWithEdgeWeight[] {
        const edges = this.edges.toArray();

        /** @param {LinkedListNode} node */
        const neighborsConverter = node => {
            const edge = node.value;
            const neighbor = edge.startVertex === this ? edge.endVertex : edge.startVertex;

            neighbor.edge = edge;
            return neighbor;
        };

        return edges.map(neighborsConverter);
    }

    hasNeighbor(vertex) {
        const edgeToNeighbor = this.edges.find({
            callback: edge => (
                edge.startVertex === vertex ||
                edge.endVertex === vertex
            )
        });

        return !!edgeToNeighbor;
    }

    findEdge(vertex) {
        const edgeFinder = edge => (
            edge.startVertex === vertex || edge.endVertex === vertex
        );

        const edge = this.edges.find({callback: edgeFinder});

        return edge ? edge.value : null;
    }

    deleteAllEdges() {
        this.getEdges().forEach(edge => this.deleteEdge(edge));
    }

    getKey() {
        return this.value;
    }

    toString() {
        return `${this.value}`;
    }
}
