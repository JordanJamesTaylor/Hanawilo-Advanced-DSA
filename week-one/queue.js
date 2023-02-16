/*
    Challenge 1: Draw and explain in a diagram of how the queue data structure works ---> see written-answers.  
    
    Challenge 2: Create 2 methods that are:   
        • enqueue (insert a element at the end of the queue) 
        • dequeue (remove a element from the start of the queue)

    Challenge 3: Create 3 additional methods that are: 
        • peek (retrieves the element at the start of the queue, WITHOUT removing it) 
        • isEmpty (checks if the queue is empty – should return true or false)  
        • printQueue (prints the elements in the queue)    
*/

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value){
        // Should we use const or let when making a newNode?
        const newNode = new Node(value); // O(1)

        if(!this.front){ // O(1)
            this.front = newNode; // O(1)
            this.rear = this.front; // O(1)
        }else{
            this.rear.next = newNode; // O(1)
            this.rear = newNode; // O(1)
        }

        this.size++; // O(1)
        return this; // O(1)
    }

    dequeue(){
        // I know the check should be consistent, just demonstrating different ways to check if the queue is populated
        if(!this.front) return null; // O(1)

        let temp = this.front; // O(1)

        if(this.size === 1){ // O(1)
            this.front = null; // O(1)
            this.rear = this.front; // O(1)
        }else{
            this.front = this.front.next; // O(1)
        }

        this.size--; // O(1)
        return temp; // O(1)
    }

    peek(){
        if(!this.front) return null;

        // Not sure if you want the node or just the value
        // return this.front;
        return this.front.value;
    }

    isEmpty(){
        if(!this.front) return true; // O(1)

        return false; // O(1)
    }

    // Not sure if you wanted the nodes or their values
    printQueue(){ // return queue with nodes
        if(!this.front) return null; // O(1)

        return this; // O(1)
    }

    printQueue(){ // return array with values of each node in queue

        if(!this.front) return null; // O(1)

        let queueValues = []; // O(1)
        let currentNode = this.front; // O(1)

        while(true){ // O(n)
            queueValues.push(currentNode.value); // O(1)
            currentNode = currentNode.next; // O(1)
            
            if(!currentNode) break; // O(1)
        }

        return queueValues; // O(1)
    }
}

let queue = new Queue();

// console.log('ENQUEUE');
// queue.enqueue('Biscuit');
// queue.enqueue('says');
// queue.enqueue("'Hey Tony!'");
// console.log(queue);
// console.log('-----------------------------------------------------------------------------\n');

// console.log('DEQUEUE');
// console.log('REMOVED NODE ---> ', queue.dequeue());
// console.log('-----------------------------------------------------------------------------\n');

// console.log('PEEK');
// console.log('front node in queue ---> ', queue.peek());
// console.log('-----------------------------------------------------------------------------\n');

// console.log('IS EMPTY');
// console.log(queue.isEmpty());
// console.log('-----------------------------------------------------------------------------\n');

// console.log('PRINT QUEUE');
// console.log(queue.printQueue());
// console.log('-----------------------------------------------------------------------------\n');