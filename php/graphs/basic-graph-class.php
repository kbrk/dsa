<?php

class Graph {

    private $size; // the quantity of vertex data
    private $matrixAdjacent = [];
    private $matrixAdjacentWeight = [];
    public $arrayVertex;


    public function __construct($size){
        $this->size = $size;

        // generate an adjacency matrix with the default values 0.
        for ($i = 0; $i < $size; $i++) {
            //array_fill(0, $size, $value);
            $this->matrixAdjacent.[array_fill(0, $this->size, 0)];
            $this->matrixAdjacentWeight.[array_fill(0, $this->size, 0)];
        }

        // generate a vertex array with the default value ''.
        $this->arrayVertex = array_fill(0, $this->size, '');

    }

    /**
     * @param int i: the index of the arrayVertex. 
     * @param string value: the value of the ith vertex.
     * 
     */
    public function addVertexData($i, $value) {
        if(0 <= $i && $i <= $this->size) {
            $this->arrayVertex[$i] = $value;
        }
    }


}

$graph = new Graph(4);
$graph->addVertexData(0, 'A');
$graph->addVertexData(1, 'B');
$graph->addVertexData(2, 'C');
$graph->addVertexData(3, 'D');

var_dump($graph->arrayVertex);

