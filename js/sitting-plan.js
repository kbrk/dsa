const plan = (guest) => {

}

const countGuest = 60;
let arrayGuest = []
for (let i = 0; i < 60; i++) {
    arrayGuest.push(i);
}

let cloneGuest = [...arrayGuest]


// function generateTableArray(start = "A".charCodeAt(0), end = start + 25) {
//     const table = [];
//     for (let i = start; i <= end; i++) {
//         const char = String.fromCharCode(i);
//         table.push([char, []]);
//     }
//     return table;
// }

const maxCountTable = 10
// var arrayTable = new Array(maxCountTable);
var arrayTable = Array.from(
    { length: 30 },
    () => {
        return [];
    }
);
// console.log(arrayTable);
const firstTable = [10, 11, 12, 13, 14, 15, 16, 17, 18]
const arrayPeopleTogether = [
    [2, 3], [0, 4, 5, 6, 7], [1, 8, 9, 19], [20, 21, 22], [23, 24], [25, 26], [27, 28, 29, 30], [31, 32, 33, 34, 35, 36]
]
var iAI = 0;
arrayTable[iAI] = firstTable
iAI += 1;



function removeValuesFromArray(array, arrayOmmit) {
    return array.filter(element => !arrayOmmit.includes(element));
}

cloneGuest = removeValuesFromArray(cloneGuest, firstTable);

for (let array of arrayPeopleTogether) {
    cloneGuest = removeValuesFromArray(cloneGuest, array);
}

console.log(cloneGuest);


const setPeopleTogether = () => {
    let settled = false;
    let j = 0;
    while (arrayPeopleTogether.length > 0 && iAI < maxCountTable) {
        settled = false;
        let array = arrayPeopleTogether[j]
        //const iRandomTable = Math.floor(Math.random() * (maxCountTable - iAI + 1)) + iAI;
        const iRandomTable = iAI;
        //console.log(arrayTable[iRandomTable]);
        if (arrayTable[iRandomTable].length + array.length <= 10) {
            arrayTable[iRandomTable] = arrayTable[iRandomTable].concat(array);
            arrayPeopleTogether.splice(j, 1);
            settled = true;
            //j++; // splice ile her seferinde ilk eleman siliniyor. j'yi arttırmaya geek yok. 

        } else {
            iAI++;
        }
    }
}
setPeopleTogether();

console.log("TABLES: ", arrayTable);