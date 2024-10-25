class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(13);
const node7 = new TreeNode(7);
const node15 = new TreeNode(15);
const node3 = new TreeNode(3);
const node8 = new TreeNode(8);
const node14 = new TreeNode(14);
const node19 = new TreeNode(19);
const node18 = new TreeNode(18);

root.left = node7
root.right = node15

node7.left = node3
node7.right = node8

node15.left = node14
node15.right = node19

node19.left = node18

const inOrderedTraversal = (node) => {
    if (!node) {
        return;
    }
    inOrderedTraversal(node.left);
    console.log(node.data);
    inOrderedTraversal(node.right);
}

const search = (node, target) => {
    if (!node) {
        return null;
    }
    if (node.data == target) {
        return node;
    }
    if (node.data < target) {
        return search(node.right, target);
    }
    if (node.data > target) {
        return search(node.left, target);
    }
}

/**
 * 
 * @param {*} node 
 * @param {*} data 
 * @returns 
 */
const insert = (node, data) => {
    // if there is no node create the node to be inserted.
    if (!node) {
        return new TreeNode(data);
    }

    if (data < node.data) { // if the data to be inserted lower than the current node.data, go to the left and continue until there is no right or left node.
        node.left = insert(node.left, data);
    } else if (data > node.data) { // if the data to be inserted higher than the current node.data, go to the right and continue until there is no right or left node.
        node.right = insert(node.right, data);
    }
    return node; // to maintain the recursion
}

var count = 0;
const deleteNode = (node, data) => {
    count++;
    console.log(count, node, data);
    if (!node) {
        return null;
    }

    if (data < node.data) { // searching the node te be deleted.
        node.left = deleteNode(node.left, data);
    } else if (data > node.data) { // searching the node te be deleted.
        node.right = deleteNode(node.right, data);
    } else { // data == node.data
        if (!node.left) {
            let temp = node.right;
            node = null;
            return temp;
        }

        if (!node.right) {
            let temp = node.left;
            node = null;
            return temp;
        }

        // if there are both left and right children go the successor (right) node to find the min value.
        node.data = minValue(node.right, data);
        node.right = deleteNode(node.right, node.data);
    }

    return node; // to maintain the recursion
}

const minValue = (node) => {
    let currentNode = node;
    while (currentNode.left) {
        currentNode = currentNode.left;
    }
    return currentNode.data;
}

const maxValue = (node) => {
    let currentNode = node;
    while (currentNode.right) {
        currentNode = currentNode.right;
    }
    return currentNode.data;
}

console.log("In Ordered Tree: ");
inOrderedTraversal(root);

searchedNode = search(root, 8);
console.log("Found Data: ", searchedNode.data);

insert(root, 1);
// insert(root, 111);
// console.log("After insert: ");
// inOrderedTraversal(root);

const min = minValue(root);
console.log("Min. value: ", min);

const max = maxValue(root);
console.log("Max. value: ", max);

deleteNode(root, 8);
console.log("After delete root: ", root);
console.log("After delete: ");
inOrderedTraversal(root);