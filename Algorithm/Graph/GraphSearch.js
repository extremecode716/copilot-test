// Graph Search Algorithm

var GraphSearch = (function () {
    function GraphSearch(graph) {
        this.graph = graph;
        this.visited = [];
        this.path = [];
        this.cost = 0;
    }
    GraphSearch.prototype.search = function (start, goal) {
        var _this = this;
        this.visited[start] = true;
        this.path.push(start);
        if (start === goal) {
            return this.path;
        }
        var neighbors = this.graph.getNeighbors(start);
        neighbors.forEach(function (node) {
            if (!_this.visited[node]) {
                _this.visited[node] = true;
                _this.path.push(node);
                if (node === goal) {
                    return _this.path;
                }
                var path = _this.search(node, goal);
                if (path !== null) {
                    return path;
                }
                _this.path.pop();
            }
        });
        return null;
    };
    return GraphSearch;
})();