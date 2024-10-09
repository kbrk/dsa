class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

node1 = Node(3)
node2 = Node(5)
node3 = Node(13)
node4 = Node(2)

node1.next = node2
node2.next = node3
node3.next = node4

# currentNode = node1
# while currentNode:
#     if(currentNode.next):
#         print(currentNode.data, end= " -> ")
#     else:
#         print(currentNode.data)
#     currentNode =  currentNode.next


def lowestValue():
    currentNode = node1
    min = node1.data

    while currentNode:
        if currentNode.data < min:
            min = currentNode.data
        currentNode = currentNode.next
    return min

print("The min data: ", lowestValue())


def traverseNodes(head):
    print("Traverse Nodes: ")
    currentNode = head
    while currentNode:
        if(currentNode.next):
            print(currentNode.data, end= " -> ")
        else:
            print(currentNode.data)
        currentNode =  currentNode.next

traverseNodes(node1)

def deleteNode(head, nodetoDelete):
    if head == nodetoDelete:
        return head.next
    currentNode = head

    while currentNode.next and currentNode.next != nodetoDelete:
        currentNode = currentNode.next
    
    if currentNode.next == None:
        return head
    
    if currentNode.next == nodetoDelete:
        currentNode.next = currentNode.next.next

    return head # return the head to get the whole linked list

nodesAfterDelete = deleteNode(node1, node2)

print("Nodes After Delete: ")
traverseNodes(nodesAfterDelete)

def insertNode(head, newNode, position):
    if position <= 1:
        newNode.next = head
        return newNode # the new head is the new list
    
    currentNode = head

    for i in range(position - 2):
        # If the position is out of bounds of the list, put the new node to the tail.
        if currentNode.next == None:
            currentNode.next = newNode
            return head
        currentNode = currentNode.next
    
    newNode.next = currentNode.next
    currentNode.next = newNode

    return head

inserted = insertNode(nodesAfterDelete, Node(10), 3)

print("Nodes After Insert: ")
traverseNodes(inserted)
