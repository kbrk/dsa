<?php

class NodeCircular
{
    public $data;
    public $next;
    public function __construct($data)
    {
        $this->data = $data;
        $this->next = null;
    }
}


$node1 = new NodeCircular(3);
$node2 = new NodeCircular(5);
$node3 = new NodeCircular(13);
$node4 = new NodeCircular(2);

$node1->next = $node2;
$node2->next = $node3;
$node3->next = $node4;

$currentNode = $node1;
$startNode = $node1;

$log = '';
do {
    $log .= $currentNode->data;
    if ($currentNode->next != $startNode) {
        $log .= " -> ";
    }
    $currentNode = $currentNode->next;
} while ($currentNode != $startNode);

print_r($log);
