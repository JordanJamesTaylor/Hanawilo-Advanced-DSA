/*
    Challenge 1: Draw and explain in a diagram of how the queue data structure works.  
    
    Challenge 2: Create 2 methods that are:   
    • enqueue (insert a element at the end of the queue) 
    • dequeue (remove a element from the start of the queue)
    • peek (retrieves the element at the start of the queue, WITHOUT removing it) 
    • isEmpty (checks if the queue is empty – should return true or false)  
    • hint - what property of the queue can you use to build this method J?  
    • printQueue (prints the elements in the queue)    
*/

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.last = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = null;
    }

    enqueue(value){
        const newNode = new Node(value); // O(1)

        if(this.size === 0){ // O(1)
            this.first = newNode; // O(1)
            this.last = this.first; // O(1)
        }else{
            this.last.next = newNode; // O(1)
            this.last = newNode; // O(1)
        }

        this.size++; // O(1)
        return this; // O(1)
    }

    dequeue(){
        // I know the check should be consistent, just demonstrating different ways to check if the queue is populated
        if(!this.first) return null; // O(1)

        let temp = this.first; // O(1)

        if(this.size === 1){ // O(1)
            this.first = null; // O(1)
            this.last = this.first; // O(1)
        }else{
            this.first = this.first.next; // O(1)
        }

        this.size--; // O(1)
        return temp; // O(1)
    }

    peek(){
        if(!this.first) return null;

        return this.first;
    }

    isEmpty(){
        if(!this.last) return true; // O(1)

        return false; // O(1)
    }

    // Not sure if you wanted the nodes or just their values
    printQueue(){
        return this; // O(1)
    }

    printQueue(){

        if(!this.first) return null;

        let queueValues = [];
        let currentNode = this.first;

        while(true){
            queueValues.push(currentNode.value);
            currentNode = currentNode.next;
            if(currentNode.value === null) break;
        }

        return queueValues;
    }
}