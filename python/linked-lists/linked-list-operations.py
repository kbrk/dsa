class NodeOpt:
    def __init__(self, data):
        self.prev = None
        self.data = data
        self.next = None

node1 = NodeOpt(3)
node2 = NodeOpt(5)
node3 = NodeOpt(13)
node4 = NodeOpt(2)

node1.next = node2
node2.next = node3
node3.next = node4

