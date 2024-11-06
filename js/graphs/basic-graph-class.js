class Graph {
    constructor(size) {
        this.size = size; // the quantity of vertex data.
        this.matrixAdjacent = [];
        this.matrixAdjacentWeight = [];
        // generate an adjacency matrix with the default values 0.
        for (let i = 0; i < size; i++) {
            this.matrixAdjacent.push(Array.from({ length: size }, () => 0));
            this.matrixAdjacentWeight.push(Array.from({ length: size }, () => 0));
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
    addEdge(iVertex, iConnected, weight) {
        if (0 <= iVertex < this.size && 0 <= iConnected < this.size) {
            this.matrixAdjacent[iVertex][iConnected] = 1; // the connection
            this.matrixAdjacent[iConnected][iVertex] = 1; // the symetric connection

            this.matrixAdjacentWeight[iVertex][iConnected] = weight;
        }
    }

    printGraph() {
        console.log('The Adjecency Matrix:');
        for (let row = 0; row < this.size; row++) {
            console.log(this.matrixAdjacent[row].join(' '));
        }

        console.log('The Adjecency Matrix with Wight:');
        for (let row = 0; row < this.size; row++) {
            console.log(this.matrixAdjacentWeight[row].join(' '));
        }

    }

    /**
     * @description Depth first search traversal of all adjacent vertices.
     * @param {number} iVertex: index of the vertex 
     * @param {array} arrayIsVisited: array showing the visiting status of its elements. 
     */
    dfsTraverse(iVertex, arrayIsVisited) {
        console.log(this.arrayVertex[iVertex]);
        arrayIsVisited[iVertex] = true;

        for (let i in this.matrixAdjacent) {
            i= parseInt(i);
            if (!arrayIsVisited[i] && this.matrixAdjacent[iVertex][i] == 1) {
                this.dfsTraverse(i, arrayIsVisited);
            }
        }
    }

    /**
     * Initiator function of depth first search
     * @param {string} startVertex: starting vertex  
     */
    depthFirstSearch(startVertex) {
        const arrayIsVisited = Array.from({ length: this.size }, () => false); // the visiting status of all vertices is false
        const iVertex = this.arrayVertex.indexOf(startVertex);
        if (iVertex == -1) {
            console.log(`The vertex ${startVertex} is not present.`);
            return;
        }
        this.dfsTraverse(iVertex, arrayIsVisited);
    }
}

const graph = new Graph(4);
graph.addVertexData(0, 'A');
graph.addVertexData(1, 'B');
graph.addVertexData(2, 'C');
graph.addVertexData(3, 'D');

graph.addEdge(0, 1, 3); // A connected to B with weight 3
graph.addEdge(0, 2, 2); // A connected to C with weight 2
graph.addEdge(3, 0, 4); // D connected to A with weight 4
graph.addEdge(2, 1, 1); // C connected to B with weight 1

console.log('The vertex array: ', graph.arrayVertex);
graph.printGraph();

console.log('Depth First Search Traversal:');
graph.depthFirstSearch('C');