class Graph{

    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        // add name of vertex as key to list --> value = empty arr
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2){
        if(!this.adjacencyList[v1]) return null;
        if(!this.adjacencyList[v2]) return null;

        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
        }

        return this;
    }

    removeEdge(v1, v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return null;

        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);

        return this;
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return null;
        
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
        return this;
    }
}

let g = new Graph();

g.addVertex('Tom Brandy');
g.addVertex('Tony Kim');
g.addVertex('Patrick Mahomes');
g.addVertex('Lebron James');

g.addEdge('Tom Brandy', 'Lebron James');
g.addEdge('Tony Kim', 'Lebron James');
g.addEdge('Tony Kim', 'Tom Brandy');
g.addEdge('Patrick Mahomes', 'Lebron James');
g.addEdge('Lebron James', 'Tom Brandy');
g.addEdge('Lebron James', 'Tony Kim');
g.addEdge('Lebron James', 'Patrick Mahomes');

g.removeVertex('Lebron James');
