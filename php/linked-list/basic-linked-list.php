<?php
class Node
{
    public $data;
    public $next;
    public function __construct($data) {
        $this->data = $data;
        $this->next = null;
    }
}


$node1 = new Node(3);
$node2 = new Node(5);
$node3 = new Node(13);
$node4 = new Node(2);

$node1->next = $node2;
$node2->next = $node3;
$node3->next = $node4;

$currentNode = $node1;


$log = '';
while (isset($currentNode)) {
    if ($currentNode->next) {
        $log .= $currentNode->data . ' -> ';
    } else {
        $log .= $currentNode->data;
    }
    $currentNode = $currentNode->next;
}

print_r($log);