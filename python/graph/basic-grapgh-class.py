class Graph:
    def __init__(self, size):
        self.size = size # the quantity of vertex data
        #generate an adjacency matrix with the default values 0.
        self.adjacency_matrix = [[0] * size for _ in range(size)]
        self.weight_matrix = [[0] * size for _ in range(size)]
        
        # generate a vertex array with the default value ''.
        self.vertices = [""] * size

    def add_vertex(self, index, value):
        if 0 <= index < self.size:
            self.vertices[index] = value

    def add_edge(self, vertex1, vertex2, weight):
        if 0 <= vertex1 < self.size and 0 <= vertex2 < self.size:
            self.adjacency_matrix[vertex1][vertex2] = 1
            self.adjacency_matrix[vertex2][vertex1] = 1
            self.weight_matrix[vertex1][vertex2] = weight

    def print_graph(self):
        print("Adjacency Matrix:")
        for row in self.adjacency_matrix:
            print(row)

        print("Weight Matrix:")
        for row in self.weight_matrix:
            print(row)

    def dfs_traverse(self, vertex, visited):
        print(self.vertices[vertex])
        visited[vertex] = True

        for neighbor in range(self.size):
            if not visited[neighbor] and self.adjacency_matrix[vertex][neighbor] == 1:
                self.dfs_traverse(neighbor, visited)

    def dfs(self, start_vertex):
        visited = [False] * self.size
        start_index = self.vertices.index(start_vertex)
        self.dfs_traverse(start_index, visited)

    def bfs(self, start_vertex):
        queue = [self.vertices.index(start_vertex)]
        visited = [False] * self.size
        visited[queue[0]] = True

        while queue:
            current_vertex = queue.pop(0)
            print(self.vertices[current_vertex])

            for neighbor in range(self.size):
                if not visited[neighbor] and self.adjacency_matrix[current_vertex][neighbor] == 1:
                    queue.append(neighbor)
                    visited[neighbor] = True

# Example usage:
graph = Graph(4)

# add vertices
graph.add_vertex(0, 'A')
graph.add_vertex(1, 'B')
graph.add_vertex(2, 'C')
graph.add_vertex(3, 'D')

# add edges
graph.add_edge(0, 1, 3) # A connected to B with weight 3
graph.add_edge(0, 2, 2) # A connected to C with weight 2
graph.add_edge(3, 0, 4) # D connected to a with weight 4
graph.add_edge(2, 1, 1) # C connected to B with weight 1

print("Vertex array:", graph.vertices)
graph.print_graph()

print("DFS Traversal:")
graph.dfs('C')

print("BFS Traversal:")
graph.bfs('C')