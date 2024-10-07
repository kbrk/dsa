class NodeCircularSingle {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

node1 = new NodeCircularSingle(3);
node2 = new NodeCircularSingle(5);
node3 = new NodeCircularSingle(13);
node4 = new NodeCircularSingle(2)

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node1;

currentNode = node1;
startNode = node1;

let log = '';

do {
    log += currentNode.data;
    if (currentNode.next != startNode) {
        log += " -> ";
    }
    currentNode = currentNode.next
}
while (currentNode != startNode)

console.log(log)
