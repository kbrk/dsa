<?php

class NodeCircularSingle
{
    public $data;
    public $next;
    public function __construct($data)
    {
        $this->data = $data;
        $this->next = null;
    }
}


$node1 = new NodeCircularSingle(3);
$node2 = new NodeCircularSingle(5);
$node3 = new NodeCircularSingle(13);
$node4 = new NodeCircularSingle(2);

$node1->next = $node2;
$node2->next = $node3;
$node3->next = $node4;
$node4->next = $node1;

$currentNode = $node1;
$startNode = $node1;

do {
    $log .= $currentNode->data;
    $next = $currentNode->next;
    if (isset($next) && $next != $startNode) {
        $log .= " -> ";
    }
    $currentNode = $next;

} while ($currentNode != $startNode );

print_r($log);
