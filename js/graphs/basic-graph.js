var arrayVertex = ['A', 'B', 'C', 'D']; // the edge points
var arrayConnection = [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 0]
];

const printConnections = () => {
    for (let i = 0; i < arrayVertex.length; i++) {
        let strCon = `${arrayVertex[i]}: `;
        for (let row = 0; row < arrayConnection.length; row++) {
            if (arrayConnection[row][i] == 1) {
                strCon += `${arrayVertex[row]}, `;
            }
        }
        console.log(strCon)
    }
}

printConnections();