class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
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

    recursiveDFS(){
        const start = Object.keys(this.adjacencyList)[0];

        let results = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        (function dfs(vertex = start){ // IIFE with default param
            if(!vertex) return null;
            visited[vertex] = true;
            results.push(vertex);
            adjacencyList[vertex].forEach((neighbour) => {
                if(!visited[neighbour]) return dfs(neighbour);
            });
        }(start));

        return results;
    }

    recursiveBFS(){
        const start = Object.keys(this.adjacencyList)[0];
        let queue = [start];
        let results = [];
        let visited = {};
        let currentVertex;

        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            results.push(currentVertex);
            this.adjacencyList[currentVertex].forEach((neighbour) => {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            })
        }

        return results;
    }

    findOddVals(str){
        let arr;

        if(str.toLowerCase() == 'dfs') arr = this.recursiveDFS();
        if(str.toLowerCase() == 'bfs') arr = this.recursiveBFS();

        return arr.filter(val => parseInt(val) % 2 !== 0);
    }

    showVertices(){
        let results = this.recursiveDFS();
        return results;
    }
}

let g = new Graph();

g.addVertex("1");
g.addVertex("2");
g.addVertex("3"); 
g.addVertex("4");
g.addVertex("5"); 
g.addVertex("6"); 

g.addEdge("1", "2");
g.addEdge("1", "3"); 
g.addEdge("2", "4"); 
g.addEdge("3", "5"); 
g.addEdge("4", "5"); 
g.addEdge("4", "6"); 
g.addEdge("5", "6"); 

 g.findOddVals('DFS'); // [ '1', '5', '3' ]
 g.findOddVals('BFS'); // [ '1', '5', '3' ]

let g2 = new Graph();

g2.addVertex("0"); 
g2.addVertex("2");
g2.addVertex("4"); 
g2.addVertex("3");
g2.addVertex("1"); 

g2.addEdge("0", "2");
g2.addEdge("0", "3");
g2.addEdge("0", "1");   
g2.addEdge("2", "4");

g2.showVertices(); // [ '0', '2', '4', '3', '1' ]
