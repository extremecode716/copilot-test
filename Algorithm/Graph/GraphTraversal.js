// Graph Alhorithms.
// BFS, DFS, Topological Sort, etc.
"use strict";

// Constructor
function GraphTraversal(graph) {
    this.graph = graph;
}

// Public methods
GraphTraversal.prototype = {
    // BFS
    bfs: function (start, visit) {
        var queue = [start];
        var visited = {};
        visited[start] = true;

        while (queue.length > 0) {
            var current = queue.shift();
            visit(current);
            this.graph.getNeighbors(current).forEach(function (neighbor) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
    },

    // DFS
    dfs: function (start, visit) {
        var stack = [start];
        var visited = {};
        visited[start] = true;

        while (stack.length > 0) {
            var current = stack.pop();
            visit(current);
            this.graph.getNeighbors(current).forEach(function (neighbor) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
    },

    // Topological Sort
    topologicalSort: function (visit) {
        var visited = {};
        var sorted = [];

        this.graph.getVertices().forEach(function (vertex) {
            if (!visited[vertex]) {
                this.topologicalSortDFS(vertex, visited, sorted);
            }
        }, this);

        sorted.forEach(function (vertex) {
            visit(vertex);
        });
    },

    // Topological Sort (Depth First Search)
    topologicalSortDFS: function (vertex, visited, sorted) {
        visited[vertex] = true;

        this.graph.getNeighbors(vertex).forEach(function (neighbor) {
            if (!visited[neighbor]) {
                this.topologicalSortDFS(neighbor, visited, sorted);
            }
        }, this);

        sorted.push(vertex);
    }
};

// Export
global.GraphTraversal = GraphTraversal;