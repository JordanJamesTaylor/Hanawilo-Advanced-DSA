class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
        this.size = 0;
    }

    insert(value){ 
        const newNode = new Node(value);

        if (!this.root){
            this.root = newNode;
            this.size++;
            return this;
        }

        let currentNode = this.root;

        while(true){ 
            if (newNode.val === currentNode.val) return undefined;

            if(newNode.val < currentNode.val){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            }else{
                if(!currentNode.right){
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
        }

        this.size++;
        return this;
    }

    bubbleSort(arr, n = arr.length){
        if(n == 1) return arr;
    
        for(let j = 0; j < n - 1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        };
    
        return this.bubbleSort(arr, n-1);
    };

    leafCountBFS(){
        let node = this.root;
        let queue = [];
        let count = 0;
        
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            
            if(!node.left && !node.right) count++;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        return count;
    }

    leafCountDFS(){
        let count = 0;

        function traverse(node){  
            if(!node.left && !node.right) count++;
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
    
        traverse(this.root);

        return count;
    }

    oddNodeCountBFS(){
        let node = this.root;
        let queue = [];
        let oddNodes = [];

        queue.push(node);

        while(queue.length){
            node = queue.shift();
            
            if(node.val % 2 !== 0) oddNodes.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        return this.bubbleSort(oddNodes);
    }

    oddNodeCountDFS(){
        let oddNodes = [];

        function traverse(node){
            if(node.val % 2 !== 0) oddNodes.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
    
        traverse(this.root);

        return this.bubbleSort(oddNodes);
    }

    sameBFS(tree1, tree2){
        let queue = [];

        queue.push(tree1.root);
        queue.push(tree2.root);

        while(queue.length){
            let node2 = queue.shift();
            let node1 = queue.shift();

            if(node1.val === node2.val){
                if(node1.left) queue.push(node1.left);
                if(node2.left) queue.push(node2.left);
                if(node1.right) queue.push(node1.right); 
                if(node2.right) queue.push(node2.right);
            }else{
                return false;
            }
        }

        return true;
    }

    sameDFS(tree1, tree2){

        function traverse(node1, node2){
            if(node1.val === node2.val){
                if(node1.left && node2.left) traverse(node1.left, node2.left);
                if(node1.right && node2.right) traverse(node1.right, node2.right);
            }else{
                return false;
            }

            return true;
        }
    
        return traverse(tree1.root, tree2.root);
    }
}

let tree1 = new BinarySearchTree(); 
tree1.insert(8);
tree1.insert(3); 
tree1.insert(1);
tree1.insert(6); 
tree1.insert(4); 
tree1.insert(7);
tree1.insert(10); 
tree1.insert(14); 
tree1.insert(13);

let tree2 = new BinarySearchTree();
tree2.insert(8);
tree2.insert(3); 
tree2.insert(1);
tree2.insert(6); 
tree2.insert(4); 
tree2.insert(7);
tree2.insert(10); 
tree2.insert(14); 
tree2.insert(13);

let tree3 = new BinarySearchTree();
tree3.insert(12);
tree3.insert(9); 
tree3.insert(5);
tree3.insert(6); 

tree1.leafCountBFS(); // 4
tree1.leafCountDFS(); // 4

tree1.oddNodeCountBFS(); // [ 1, 3, 7, 13 ]
tree1.oddNodeCountDFS(); // [ 1, 3, 7, 13 ]

tree1.sameBFS(tree1, tree2); // true
tree1.sameBFS(tree1, tree3); // false
tree1.sameDFS(tree1, tree2); // true
tree1.sameDFS(tree1, tree3); // false
