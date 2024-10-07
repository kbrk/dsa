<?php

class NodeDLL
{
    private $data;
    private $next;
    private $prev;
    public function __construct()
    {
        $this->data = null;
        $this->next = null;
        $this->prev = null;
    }

    public function setData($data): void
    {
        $this->data = $data;
    }

    public function getData()
    {
        return $this->data;
    }

    public function setNext($next): void
    {
        $this->next = $next;
    }

    public function getNext()
    {
        return $this->next;
    }

    public function setPrev($prev): void
    {
        $this->prev = $prev;
    }

    public function getPrev()
    {
        return $this->prev;
    }
}

$node1 = new NodeDLL();
$node2 = new NodeDLL();
$node3 = new NodeDLL();
$node4 = new NodeDLL();

$node1->setData(3);
$node1->setNext($node2);

$node2->setPrev($node1);
$node2->setData(5);
$node2->setNext($node3);

$node3->setPrev($node2);
$node3->setData(13);
$node3->setNext($node4);

$node4->setPrev($node3);
$node4->setData(2);

$currentNode = $node1;

$log = '';
while (isset($currentNode)) {
    $next = $currentNode->getNext();
    $log .= $currentNode->getData();
    if (isset($next)) {
        $log .= ' -> ';
    }
    $currentNode = $next;
}

echo "To the Tail: ";
print_r($log);


$currentNode = $node4;

$log = '';
while (isset($currentNode)) {
    $prev = $currentNode->getPrev();
    $log .= $currentNode->getData();
    if (isset($prev)) {
        $log .= ' -> ';
    }
    $currentNode = $prev;
}

echo "\nTo the Head: ";
print_r($log);