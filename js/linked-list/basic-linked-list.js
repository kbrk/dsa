class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let node1 = new Node(3)
let node2 = new Node(5)
let node3 = new Node(13)
let node4 = new Node(2)

node1.next = node2
node2.next = node3
node3.next = node4


const traverseNodes = (head) => {
    let log = '';
    let currentNode = head;
    while (currentNode) {
        if (currentNode.next) {
            log += currentNode.data + ' -> ';
        } else {
            log += currentNode.data;
        }
        currentNode = currentNode.next;
    }
    console.log('the linked list: ', log);
}

traverseNodes(node1);

const deleteNode = (head, nodetoDelete) => {
    let currentNode;
    if (head == nodetoDelete) {
        return head.next;
    }
    currentNode = head;

    while (currentNode.next && currentNode.next != nodetoDelete) {
        currentNode = currentNode.next;
    }

    if (currentNode.next == null) {
        return head;
    }

    if (currentNode.next == nodetoDelete) {
        currentNode.next = currentNode.next.next;
    }
    return head; // return the head to get the whole linked list
}

let node1AfterDelete = deleteNode(node1, node2);
traverseNodes(node1AfterDelete);



const insertNode = (head, newNode, position) => {
    let isOutofBound = false;
    if (position <= 1) {
        newNode.next = head;
        return newNode // the new head is the new list
    }
    currentNode = head;

    for (let i = 1; i < position - 1; i++) {
        //If the position is out of bounds of the list, put the new node to the tail.
        if (currentNode.next == null) {
            currentNode.next = newNode;
            return head;
        }
        currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return head;
}

const newNode = new Node(10);

const inserted = insertNode(node1AfterDelete, newNode, 3);

traverseNodes(inserted);

const selectionSort = (head) => {
    let currentNode = head;
    if (!currentNode || !currentNode.next) {
      return; // List is empty or has only one element
    }

    while (currentNode.next !== null) {
      let minNode = currentNode;
      let nextNode = currentNode.next;

      while (nextNode !== null) {
        if (nextNode.data < minNode.data) {
          minNode = nextNode;
        }
        nextNode = nextNode.next;
      }

      // Swap data of currentNode and minNode
      const temp = currentNode.data;
      currentNode.data = minNode.data;
      minNode.data = temp;

      currentNode = currentNode.next;
    }
    return head;
  }

const sorted = selectionSort(inserted);
traverseNodes(sorted)



