<?php

class Graph
{

    public $size; // the quantity of vertex data
    private $matrixAdjacent = [];
    private $matrixAdjacentWeight = [];
    public $arrayVertex;


    public function __construct($size)
    {
        $this->size = $size;

        // generate an adjacency matrix with the default values 0.
        for ($i = 0; $i < $size; $i++) {
            $this->matrixAdjacent[] = array_fill(0, $this->size, 0);
            $this->matrixAdjacentWeight[] = array_fill(0, $this->size, 0);
        }

        // generate a vertex array with the default value ''.
        $this->arrayVertex = array_fill(0, $this->size, '');
    }

    /**
     * @param int i: the index of the arrayVertex. 
     * @param string value: the value of the ith vertex.
     * 
     */
    public function addVertexData($i, $value)
    {
        if (0 <= $i && $i <= $this->size) {
            $this->arrayVertex[$i] = $value;
        }
    }

    /**
     * @param int iVertex: the vertex data index.
     * @param int iConnected: the connected data index of the vertex data in the iVertex.
     * @param int weight: weight of the connection
     */
    public function addEdge($iVertex, $iConnected, $weight)
    {
        if (0 <= $iVertex && $iVertex < $this->size && 0 <= $iConnected && $iConnected < $this->size) {
            $this->matrixAdjacent[$iVertex][$iConnected] = 1; // the connection
            $this->matrixAdjacent[$iConnected][$iVertex] = 1; // the symetric connection

            $this->matrixAdjacentWeight[$iVertex][$iConnected] = $weight;
        }
    }

    public function printGraph()
    {
        print_r('The Adjecency Matrix:' . "\n");
        for ($row = 0; $row < $this->size; $row++) {
            print_r(implode(' ', $this->matrixAdjacent[$row]) . "\n");
        }

        print_r('The Adjecency Matrix with Weight:' . "\n");
        for ($row = 0; $row < $this->size; $row++) {
            print_r(implode(' ', $this->matrixAdjacentWeight[$row]) . "\n");
        }
    }

    private $count = 0;

    /**
     * Depth first search traversal of all adjacent vertices.
     * @param int iVertex: index of the vertex 
     * @param array arrayIsVisited: array showing the visiting status of its elements. 
     */
    public function dfsTraverse($iVertex, $arrayIsVisited)
    {
        echo $this->arrayVertex[$iVertex] . "\n";
        $arrayIsVisited[$iVertex] = true;
        $this->count++;

        for ($i = 0; $i < $this->size; $i++) {
            if ($this->count == $this->size) {
                break;
            }
            if (!$arrayIsVisited[$i] && $this->matrixAdjacent[$iVertex][$i] == 1) {
                $this->dfsTraverse($i, $arrayIsVisited);
            }
        }
    }

    /**
     * Initiator function of depth first search
     * @param string startVertex: starting vertex  
     */
    public function depthFirstSearch(string $startVertex)
    {
        $visited = array_fill(0, $this->size, false); // Initialize visited array
        $iVertex = array_search($startVertex, $this->arrayVertex);

        if ($iVertex === false) {
            echo "The vertex $startVertex is not present.\n";
            return;
        }

        $this->dfsTraverse($iVertex, $visited);
    }

    /**
     * 
     * @param string startVertex: starting vertex 
     */
    public function breadthFirstSearch(string $startVertex)
    {
        $queue = [array_search($startVertex, $this->arrayVertex)]; // Initialize the queue with the start vertex index
        $visited = array_fill(0, $this->size, false); // Initialize the visited array. The visiting status of all vertices is false.
        $visited[$queue[0]] = true; // Mark the first vertex as visited

        while (!empty($queue)) {
            $currentVertexIndex = array_pop($queue);
            echo $this->arrayVertex[$currentVertexIndex] . "\n";

            for ($i = 0; $i < $this->size; $i++) {
                if (!$visited[$i] && $this->matrixAdjacent[$currentVertexIndex][$i] == 1) {
                    $queue[] = $i;
                    $visited[$i] = true;
                }
            }
        }
    }
}

$graph = new Graph(4);

// add vertices
$graph->addVertexData(0, 'A');
$graph->addVertexData(1, 'B');
$graph->addVertexData(2, 'C');
$graph->addVertexData(3, 'D');

// add edges
$graph->addEdge(0, 1, 3); // A connected to B with weight 3
$graph->addEdge(0, 2, 2); // A connected to C with weight 2
$graph->addEdge(3, 0, 4); // D connected to A with weight 4
$graph->addEdge(2, 1, 1); // C connected to B with weight 1

print_r('The vertex array: ');
print_r($graph->arrayVertex);
$graph->printGraph();


print_r('Depth First Search Traversal: ' . "\n");
$graph->depthFirstSearch('C');

print_r('Breadth First Search Traversal: ' . "\n");
$graph->breadthFirstSearch('C');
