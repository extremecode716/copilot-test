// Huffman code
function round(num) {
    return Math.round(num);
}
class MinHeap {
    constructor(capacity) {
        this.list = new Array(capacity + 1);
        this.size = 0;
        this.capacity = capacity
        this.list[0] = Number.MAX_VALUE
    }
    isFull() {
        return this.size === this.capacity;
    }
    isEmpty() {
        return this.size === 0;
    }
    insert(element) {
        let i;
        if (this.isFull()) {
            return 'full';
        }
        i = ++this.size;
        for (; i > 1 && this.list[round(i / 2)].weight > element.weight; i = round(i / 2)) {
            this.list[i] = this.list[round(i / 2)];
        }
        this.list[i] = element;
    }

    deleteMin() {
        let parent, child;
        if (this.isEmpty()) {
            return '堆空了';
        }
        let minItem = this.list[1];
        let tempItem = this.list[this.size];
        this.list[this.size] = undefined;
        this.size--;

        for (parent = 1; parent * 2 <= this.size; parent = child) {
            child = parent * 2; //左孩子
            if ((child != this.size) && (this.list[child].weight > this.list[child + 1].weight)) {
                child++;
            }
            if (tempItem.weight <= this.list[child].weight) {
                break;
            } else {
                this.list[parent] = this.list[child];
            }
        }

        this.list[parent] = tempItem;
        return minItem;
    }

    createMinHeap(arr) {
        if (!Array.isArray(arr)) {
            return;
        }
        this.list.length = 0;
        this.list[1] = Number.MAX_VALUE;
        this.size = 0;
        arr.forEach((e, i) => {
            this.list[++this.size] = e;
        });

        let changeOrderIndex = round(this.size / 2);
        while (changeOrderIndex >= 1) {
            let parent;
            let child;
            for (parent = changeOrderIndex; parent * 2 <= this.size; parent = child) {
                let tempItem = this.list[parent];
                child = parent * 2;
                if ((child != this.size) && (this.list[child].weight > this.list[child + 1].weight)) {
                    child++;
                }
                if (tempItem.weight <= this.list[child].weight) {
                    break;
                } else {

                    this.list[parent] = this.list[child];
                    this.list[child] = tempItem;
                }

            }
            changeOrderIndex--;
        }
    }
}

function HuffmanTreeNode(opt) {
    this.weight = opt.weight;
    this.data = opt.data;
    this.binaryFlag = -1;
    this.parent = null;
    this.left = null;
    this.right = null;
}


function createHuffmanTree(data) {
    let minHeap = new MinHeap(12);
    minHeap.createMinHeap(data);
    let heapSize = minHeap.size;

    let huffmanTree = null;
    for (let i = 1; i < heapSize; i++) {
        huffmanTree = new HuffmanTreeNode({
            weight: 0,
            data: 'node'
        });
        let leftNode = minHeap.deleteMin();
        leftNode.binaryFlag = 0;
        leftNode.parent = huffmanTree;
        huffmanTree.left = leftNode;
        let rightNode = minHeap.deleteMin();
        rightNode.binaryFlag = 1;
        rightNode.parent = huffmanTree;
        huffmanTree.right = rightNode;
        huffmanTree.weight = huffmanTree.left.weight + huffmanTree.right.weight;
        minHeap.insert(huffmanTree);
    }
    huffmanTree = minHeap.deleteMin();
    return huffmanTree;
}

function travel(tree, arr) {
    if (!tree) {
        return;
    }
    if (!tree.left && !tree.right) {
        arr.push(tree);
        return;
    }
    travel(tree.left, arr);
    travel(tree.right, arr);
}

function printHuffmanCode(tree) {
    let leafArr = [];
    travel(tree, leafArr);
    leafArr.forEach(function (node) {
        let str = node.data + "'s huffman code";
        let binaryArr = [];
        while (node && node.binaryFlag !== -1) {
            binaryArr.push(node.binaryFlag);
            node = node.parent;
        }
        str += binaryArr.reverse().join("");
        console.log(str);
    });
}

let testData = [
    new HuffmanTreeNode({
        weight: 1,
        data: 'A'
    }),
    new HuffmanTreeNode({
        weight: 2,
        data: 'B'
    }),
    new HuffmanTreeNode({
        weight: 8,
        data: 'F'
    }),
    new HuffmanTreeNode({
        weight: 21,
        data: 'U'
    }),
    new HuffmanTreeNode({
        weight: 12,
        data: 'P'
    }),
    new HuffmanTreeNode({
        weight: 5,
        data: 'O'
    })
];
let hfTree = createHuffmanTree(testData);
console.log(hfTree);
printHuffmanCode(hfTree);