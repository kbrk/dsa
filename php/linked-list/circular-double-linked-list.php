<?php

class NodeCircularDouble
{
    public $prev;
    public $data;
    public $next;

    public function __construct($data)
    {
        $this->prev = null;
        $this->data = $data;
        $this->next = null;
    }
}

$node1 = new NodeCircularDouble(3);
$node2 = new NodeCircularDouble(5);
$node3 = new NodeCircularDouble(13);
$node4 = new NodeCircularDouble(2);

$node1->prev = $node4;
$node1->next = $node2;

$node2->prev = $node1;
$node2->next = $node3;

$node3->prev = $node2;
$node3->next = $node4;

$node4->prev = $node3;
$node4->next = $node1;

$currentNode = $node1;
$startNode = $node1;


$log = "";

do {
    $log .= $currentNode->data;
    $next = $currentNode->next;
    if (isset($next) && $next != $startNode) {
        $log .= " -> ";
    }
    $currentNode = $next;

} while ($currentNode != $startNode );

print_r($log);

//////////////////////////////////////////////

$currentNode = $node4;
$startNode = $node4;
$log = "";

do {
    $log .= $currentNode->data;
    $prev = $currentNode->prev;
    if ($prev != $startNode) {
        $log .= " -> ";
    }
    $currentNode = $prev;
} while ($currentNode != $startNode);

print_r($log);