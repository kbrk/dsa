
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


