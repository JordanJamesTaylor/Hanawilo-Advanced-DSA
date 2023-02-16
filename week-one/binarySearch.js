/*
    Challenge: Create 4 methods that are:
        - insert (inserts a node as a child of a given node)
        - find (retrieves a given node)
        - contains (returns a Boolean if a given node exists)
        - Remove (removes a node and its children from the BTS)
*/

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BTS{
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value);

        if(!this.root){
           this.root = newNode;
        }else{
           this.insertHelper(this.root, newNode);
        };

        return this;
    };
    
    insertHelper(node, newNode){
        if(newNode.value < node.value){

           if(!node.left){
              node.left = newNode;
           }else{
              this.insertHelper(node.left, newNode);
           };

        }else{

           if(!node.right){
              node.right = newNode;
           }else{
              this.insertHelper(node.right,newNode);
           };

        };
    };

    find(value){
        let currentNode = this.root;

        while(true){

            if(currentNode.value === value) return currentNode.value;

            if(currentNode.value > value){
                if(!currentNode.left) return null;
                currentNode = currentNode.left;
            }

            if(currentNode.value < value){
                if(!currentNode.right) return null;
                currentNode = currentNode.right;
            }
        }
    }

    contains(value){
        if(this.find(value)) return true;

        return false;
    }

    remove(value){

        if(!this.find(value)) return null;

        let currentNode = this.root;
        let temp = currentNode;
        
        if(this.root.value === value){
            this.root = null;
            return temp;
        }

        while(true){
            if(currentNode.value === value){
                if(temp.value > value){
                    temp.left = null;
                    return currentNode;
                }
                if(temp.value < value){
                    temp.right = null;
                    return currentNode;
                }
            }
           
            if(currentNode.value > value){
                temp = currentNode;
                currentNode = currentNode.left;
            }else{
                temp = currentNode;
                currentNode = currentNode.right;
            }
        }
    }
}

let binarySearchTree = new BTS();

// binarySearchTree.insert(10);
// binarySearchTree.insert(5);
// binarySearchTree.insert(20);
// binarySearchTree.insert(3);
// binarySearchTree.insert(7);
// binarySearchTree.insert(15);
// binarySearchTree.insert(30);
// binarySearchTree.insert(17);
// binarySearchTree.insert(21);
// binarySearchTree.insert(36);

// binarySearchTree.find(20);
// binarySearchTree.find(2);
// binarySearchTree.find(7);
// binarySearchTree.find(100);

// console.log(binarySearchTree.contains(29));
// console.log(binarySearchTree.contains(2));
// console.log(binarySearchTree.contains(7));
// console.log(binarySearchTree.contains(100));

// console.log("ORIGINAL TREE: ", binarySearchTree);

// binarySearchTree.remove(10);
// binarySearchTree.remove(3);
// binarySearchTree.remove(20);
// binarySearchTree.remove(30));
