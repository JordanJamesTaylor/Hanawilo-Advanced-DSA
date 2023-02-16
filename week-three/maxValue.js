class maxHeap{
    constructor(){
        this.values = [];
    }

    insert(value){
        this.values.push(value);
        this.bubbleUp()
    }

    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while(idx > 0){
            let parerntIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parerntIdx];

            if(element <= parent) break;

            this.values[parerntIdx] = element;
            this.values[idx] = parent;
            idx = parerntIdx; 
        }
    }

    maxValue(){
        // max heap will have the max value as it's 'root'
        return this.values[0];
    }
}

let heap = new maxHeap();
heap.insert(5);
heap.insert(1);
heap.insert(6);
heap.insert(3);
heap.insert(4);
heap.insert(2);

console.log(heap);