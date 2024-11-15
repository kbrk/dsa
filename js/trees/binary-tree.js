class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode('R');
const nodeA = new TreeNode('A');
const nodeB = new TreeNode('B');
const nodeC = new TreeNode('C');
const nodeD = new TreeNode('D');
const nodeE = new TreeNode('E');
const nodeF = new TreeNode('F');
const nodeG = new TreeNode('G');

root.left = nodeA;
root.right = nodeB;

nodeA.left = nodeC;
nodeA.right = nodeD;

nodeB.left = nodeE;
nodeB.right = nodeF;

nodeF.left = nodeG;


let selectedNode = "";
try {
    selectedNode = root.right.right.right.data;
} catch (e) {
    selectedNode = "NULL";
}

console.log("Selected Node: ", selectedNode);

const preOrderedTraversal = (node) => {
    if (!node) {
        return;
    }
    console.log(node.data + ", ");
    preOrderedTraversal(node.left);
    preOrderedTraversal(node.right);
}

const inOrderedTraversal = (node) => {
    if (!node) {
        return;
    }
    inOrderedTraversal(node.left);
    console.log(node.data);
    inOrderedTraversal(node.right);
}

const postOrderedTraversal = (node) => {
    if (!node) {
        return;
    }
    postOrderedTraversal(node.left);
    postOrderedTraversal(node.right);
    console.log(node.data);
}

// preOrderedTraversal(root);
//inOrderedTraversal(root);
postOrderedTraversal(root);