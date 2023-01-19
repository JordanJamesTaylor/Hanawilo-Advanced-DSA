/*
    Challenge 1: Draw and explain in a diagram of how the stack data structure works.  ---> see written-answers.

    Challenge 2: Create 2 methods that are:   
        • push (insert a element to the top of the stack) 
        • pop (remove a element from the top of the stack) 
 
    Challenge 3: Create 3 additional methods that are:  
        • peek (retrieves the element at the top of the stack, WITHOUT removing it) 
        • isEmpty (checks if the stack is empty – should return true or false)  
        • printStack (prints the elements in the stack)  
*/

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    push(value){
        const newNode = new Node(value);

        if(!this.top){
            this.top = newNode;
            this.bottom = this.top;
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }

        this.size++;
        return this;
    }

    pop(){
        if(!this.top) return null;

        const temp = this.top;

        if(this.size === 1){
            this.top = null;
            this.bottom = null;
        }else{
            this.top = temp.next;
        }

        this.size--;
        return temp;
    }

    peek(){
        if(!this.top) return null;
        
        // Not sure if you want the node or just the value
        // return this.top;
        return this.top.value;
    }

    isEmpty(){
        if(!this.top) return true;

        return false;
    }

    printStack(){
        if(!this.top) return null;

        return this;
    }

    printStack(){

        let values = [];
        let currentNode = this.top;

        while(true){
            values.push(currentNode.value);
            currentNode = currentNode.next

            if(!currentNode) break;
        }

        return values;
    }
}

let stack = new Stack();

// console.log('PUSH');
// stack.push("'Hey Tony!'");
// stack.push('says');
// stack.push('Biscuit');
// console.log(stack);
// console.log('-----------------------------------------------------------------------------\n');

// console.log('POP');
// console.log(stack.pop());
// console.log('-----------------------------------------------------------------------------\n');

// console.log('PEEK');
// console.log(stack.peek());
// console.log('-----------------------------------------------------------------------------\n');

// console.log('IS EMPTY');
// console.log(stack.isEmpty());
// console.log('-----------------------------------------------------------------------------\n');

// console.log('PRINT STACK');
// console.log(stack.printStack());
// console.log('-----------------------------------------------------------------------------\n');