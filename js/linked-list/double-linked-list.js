class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

let node1 = new Node(3)
let node2 = new Node(5)
let node3 = new Node(13)
let node4 = new Node(2)

node1.next = node2;

node2.prev = node1;
node2.next = node3;

node3.prev = node2;
node3.next = node4;

node4.prev = node3;

let currentNode = node1;

let log = '';
while (currentNode) {
    log += currentNode.data;
    if (currentNode.next) {
        log += ' -> ';
    }
    currentNode = currentNode.next;
}

console.log("To the Tail: ", log);

log = '';
currentNode = node4;
while (currentNode) {
    log += currentNode.data;
    if (currentNode.prev) {
        log += ' -> ';
    }
    currentNode = currentNode.prev;
}

console.log('To the Head: ', log);
