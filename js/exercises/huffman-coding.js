// Lossless data compression by using binary-trees
/**
 * 'a sample': 
 *      UTF-8:      01100001 00100000 01110011 01100001 01101101 01110000 01101100 01100101
 *      Encoded:    0001001100100101110111
 */

class Node {
    constructor(char = Node, freq = 0) {
        this.char = char;
        this.freq = freq;
        this.left = null;
        this.right = null;
    }
}

let nodes = [];

/**
 * @desc Count how often each piece of data occurs.
 * @param {string} text 
 * @returns frequency object
 */
const characterFrequencies = (text) => {
    let frequency = {};
    for (let char of text) {
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }
    return frequency;
}

/**
 * @desc Preparing nodes with characters and frequencies.
 * @param {object} frequency an object of characters and their frequencies.  
 */
const setNodes = (frequency) => {
    const obj = Object.keys(frequency);
    for (let i = 0; i < obj.length; i++) {
        const key = obj[i];
        const value = frequency[key];
        nodes.push(new Node(key, value));
    }
}

/**
 * @desc Building a tree starting from the lowest frequency.
 * @return the first (root) node. The frequency of the node is length of the text.
 */
const setHuffmanTree = () => {
    while (nodes.length > 1) {
        nodes.sort((a, b) => a.freq - b.freq);
        let left = nodes.shift();
        let right = nodes.shift();
        let mergedNode = new Node(null, (left.freq + right.freq));
        mergedNode.left = left;
        mergedNode.right = right;

        nodes.push(mergedNode);
    }
    return nodes[0]
}

/**
 * @desc From the root to the edge adding '0's and '1's form the code of characters. 
 * @param {Node} node 
 * @param {string} currentCode 
 * @param {object} codes 
 * @returns 
 */
const huffmanCoding = (node, currentCode, codes) => {
    if (!node) {
        return null;
    }

    if (node.char) {
        codes[node.char] = currentCode;
    }

    huffmanCoding(node.left, currentCode + '0', codes); // left children are always 0
    huffmanCoding(node.right, currentCode + '1', codes); // right children are always 1
}

const huffmanEncoding = (text) => {
    const frequency = characterFrequencies(text);
    setNodes(frequency);
    const root = setHuffmanTree(); 
    let codes = {};
    huffmanCoding(root, '', codes);
    return codes;
}

const encode = (text, codeTable) => {
    let encodedText = '';
    for (let i of text) {
        encodedText += codeTable[i];
    }
    return encodedText;
}


/**
 * 
 * @param {string} code 
 * @param {object} codeTable 
 * @returns 
 */
const decodeHuffmanCode = (code, codeTable) => {
    let decodedText = '';
    const controlTable = {};
    
    //swap the keys and values
    Object.keys(codeTable).forEach(key => {
        controlTable[codeTable[key]] = key;
    });

    let i = 0;
    let currentIndex = 1;
    while (currentIndex <= code.length) {
        let char = controlTable[code.substring(i, currentIndex)];
        if (char) {
            decodedText += char;
            i = currentIndex;
            currentIndex++;
        } else {
            currentIndex++;
        }
    }
    return decodedText;
}

const text = 'a sample';
console.log("Text: ", text);

const codeTable = huffmanEncoding(text);
console.log("Code Table: ", codeTable);

const encodedText = encode(text, codeTable);
console.log("Huffman Code: ", encodedText);

const decodedText = decodeHuffmanCode(encodedText, codeTable);
console.log("The Text: ", decodedText);

