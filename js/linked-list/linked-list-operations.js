
class NodeOpt {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

node1 = new NodeOpt(7);
node2 = new NodeOpt(11);
node3 = new NodeOpt(3);
node4 = new NodeOpt(2);
node5 = new NodeOpt(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const lowestValue = () => {
    let currentNode = node1;
    let min = node1.data;

    while (currentNode) {
        if (currentNode.data < min) {
            min = currentNode.data;
        }
        currentNode = currentNode.next;
    }
    return min;
}

const min = lowestValue();
console.log("The min value: ", min)


const traverseAndPrint = (head) => {

}

const deleteNode = (head, nodetoDelete) => {
    if (head == nodetoDelete) {
        return head.next;
    }
    currentNode = head;

    while (currentNode.next && currentNode.next != nodetoDelete) {
        currentNode = currentNode.next
    }

    //if(null)

}