class minHeap{
    constructor(){
        this.values = [];
    }

    insert(value){
        this.values.push(value);
        this.sinkDown()

        return this;
    }

    sinkDown(){
        // Your parent index starts at 0 (the root)
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            // Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
            let leftChildIdx = 2 * idx + 1;
            // Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
            let rightChildIdx = 2 * idx + 2;
            // set the left and right child as undefind because there is no guarantee that the left and right childs exist
            let leftChild,rightChild;
            // keeps tracks if we did any swaps in the loop
            let swap = null;
            
            // check if the left child is in BOUNDS
            // If the left or right child is greater than the element...swap. 
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    // The child index you swapped to now becomes the new parent index.  
                    swap = leftChildIdx;
                }
            }
            // If both left and right children are larger, swap with the largest child.
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    // left child was not swapped, and right child is bigger
                    (swap === null && rightChild > element) || 
                    // or left child was swapped but right child is bigger
                    (swap !== null && rightChild > leftChild)
                ) {
                    // The child index you swapped to now becomes the new parent index.  
                    swap = rightChildIdx;
                }
            }
            // Keep looping and swapping until neither child is larger than the element.
            if (swap === null) break;
            // now swap the parent and the child
            this.values[idx] = this.values[swap];
            this.values[swap] = element;

            // now move down the tree and start the process again by starting your NEW index at the swapped child
            idx = swap;
            }
        }
}

let heap = new minHeap();
heap.insert(5);
heap.insert(1);
heap.insert(6);
heap.insert(3);
heap.insert(4);
heap.insert(2);

console.log(heap);