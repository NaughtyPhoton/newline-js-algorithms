export class GraphEdge {
    private startVertex: any;
    private endVertex: any;
    private weight: number;

    constructor(startVertex, endVertex, weight = 0) {
        this.startVertex = startVertex;
        this.endVertex = endVertex;
        this.weight = weight;
    }

    getKey() {
        const startVertexKey = this.startVertex.getKey();
        const endVertexKey = this.endVertex.getKey();

        return `${startVertexKey}_${endVertexKey}`;
    }

    toString() {
        return this.getKey();
    }
}
