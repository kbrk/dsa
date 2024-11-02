class Graph {
    constructor(size) {
        this.size = size; // the quantity of vertex data.
        this.matrixAdjacent = [];
        // generate an adjacency matrix with the default values 0.
        for (let i = 0; i < size; i++) {
            this.matrixAdjacent.push(Array.from({ length: size }, () => 0));
        }

        // generate a vertex array with the default value ''.
        this.arrayVertex = Array.from({ length: size }, () => '');
    }

    /**
     * 
     * @param {number} i: the index of the arrayVertex. 
     * @param {any} value: the value of the ith vertex.
     */
    addVertexData(i, value) {
        if (0 <= i <= this.size) {
            this.arrayVertex[i] = value;
        }
    }

    /**
     * 
     * @param {number} iVertex: the vertex data index.
     * @param {number} iConnected: the connected data index of the vertex data in the iVertex.
     */
    addEdge(iVertex, iConnected) {
        if(0 <= iVertex < this.size && 0 <= iConnected < this.size){
            this.matrixAdjacent[iVertex][iConnected] = 1; // the connection
            this.matrixAdjacent[iConnected][iVertex] = 1; // the symetric connection
        }
    }

    printGraph() {
        console.log('The Adjecency Matrix:');
        for (let row = 0; row < this.size; row++) {
            console.log(this.matrixAdjacent[row].join(' '));
        }
    }
}

const graph = new Graph(4);
graph.addVertexData(0, 'A');
graph.addVertexData(1, 'B');
graph.addVertexData(2, 'C');
graph.addVertexData(3, 'D');

graph.addEdge(0, 1); // A connected to B
graph.addEdge(0, 2); // A connected to C
graph.addEdge(0, 3); // A connected to D
graph.addEdge(1, 2); // B connected to C

console.log('The vertex array: ', graph.arrayVertex);
graph.printGraph();