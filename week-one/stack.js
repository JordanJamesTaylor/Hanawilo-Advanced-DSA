/*
    Challenge 1: Draw and explain in a diagram of how the stack data structure works.  ---> see written-answers.

    Challenge 2: Create 2 methods that are:   
        • push (insert a element to the top of the stack) 
        • pop (remove a element from the top of the stack) 
 
    Challenge 3: Create 3 additional methods that are:  
        • peek (retrieves the element at the top of the stack, WITHOUT removing it) 
        • isEmpty (checks if the stack is empty – should return true or false)  
        • printStack (prints the elements in the stack)

    Challenge 4: Valid Parenthesis 
    
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the 
    input string is valid. 
        
    An input string is valid if: 
        • open brackets must be closed by the same type of brackets. 
        • open brackets must be closed in the correct order. 
        • every close bracket has a corresponding open bracket of the same type. 
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

function validString(str){

    if((str.length % 2) !== 0) return false;
    if(str[0] === ')' || str[0] === ']' || str[0] === '}')return false;
    if(str[str.length-1] === '(' || str[str.length-1] === '[' || str[str.length-1] === '{')return false;

    let strStack = new Stack();

    for(let  i = 0; i < str.length; i++){
        if(str[i] === "(" || str[i] === "[" || str[i] ===  "{"){
            strStack.push(str[i]);
        }else if(str[i] === ")" && strStack.top.value === "("){
            strStack.pop(); 
        } else if(str[i] === "]" && strStack.top.value === "["){
            strStack.pop();
        }else if(str[i] === "}" && strStack.top.value === "{"){
            strStack.pop();
        }else{
            return false;
        }
    }

    return strStack.size === 0;
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

// console.log('IS VALID STRING');
// console.log(validString("()"));
// console.log(validString("()[]{}"));
// console.log(validString("(]"));
// console.log('-----------------------------------------------------------------------------\n');