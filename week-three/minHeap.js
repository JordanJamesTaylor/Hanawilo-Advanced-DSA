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
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;
            
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) swap = leftChildIdx;
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) swap = rightChildIdx;
            }
            if (swap === null) break;

            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    minValue(){
        return this.values[0];
      }
}

let heap = new minHeap();
heap.insert(5);
heap.insert(1);
heap.insert(6);
heap.insert(3);
heap.insert(4);
heap.insert(2);

heap.minValue();
