class NodeStack {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0;
    }

    getSize() {
        return this.size;
    }

    peek() {
        if (this.isEmpty()) {
            return 'The stack is empty';
        }
        return this.head.data;
    }

    push(data) {
        const newNode = new NodeStack(data);

        if (this.head) {
            newNode.next = this.head; //??
        }
        this.head = newNode;
        this.size += 1;
    }

    pop() {
        if (this.isEmpty()) {
            return 'The stack is empty';
        }
        const popedNode = this.head;
        this.head = this.head.next;
        this.size -= 1;
        return popedNode;
    }
}

const stack = new Stack();
stack.push("Data1");
stack.push("Data2");
stack.push("Data3");
stack.push("Data4");

console.log("Stack Size: ", stack.getSize());
console.log("Stack Peek: ", stack.peek());
console.log("Stack Pop: ", stack.pop());
console.log("Stack Size After Pop: ", stack.getSize());
console.log("Stack Peek After Pop: ", stack.peek());