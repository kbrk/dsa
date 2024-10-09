class NodeCircularSingle:
    def __init__(self, data):
        self.data = data
        self.next = None

node1 = NodeCircularSingle(3)
node2 = NodeCircularSingle(5)
node3 = NodeCircularSingle(13)
node4 = NodeCircularSingle(2)

node1.next = node2       
node2.next = node3       
node3.next = node4       
node4.next = node1

currentNode = node1
startNode = node1

print(currentNode.data, end=" -> ")

currentNode = currentNode.next

while(currentNode != startNode):
    if(currentNode.next != startNode):
        print(currentNode.data, end=" -> ")
    else:
        print(currentNode.data)
    currentNode = currentNode.next



