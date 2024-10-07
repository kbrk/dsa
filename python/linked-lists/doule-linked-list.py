class Node:
    def __init__(self, data) -> None:
        self.data = data
        self.next = None
        self.prev = None


node1 = Node(3)
node2 = Node(5)
node3 = Node(13)
node4 = Node(2)

node1.next = node2

node2.prev = node1
node2.next = node3

node3.prev = node2
node3.next = node4

node4.prev = node3

currentNode = node1

while currentNode:
    log = str(currentNode.data)
    if currentNode.next:
        print(currentNode.data, end=" -> ")
    else:
        print(currentNode.data)
    currentNode = currentNode.next

currentNode = node4

while currentNode:
    if currentNode.prev:
        print(currentNode.data, end=" -> ")
    else:
        print(currentNode.data)
    currentNode = currentNode.prev
