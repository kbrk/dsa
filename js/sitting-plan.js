
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

const maxCountTable = 10; // number of tables
const maxTableSize = 10; // people
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
const peopleSeperate = {
    "40": [1, 2, 48, 55],
    "48": [40, 55],
    "55": [40, 48],
    "1": [2, 6, 36, 40],
    "2": [1],
    "6": [1, 28],
    "36": [1, 28],
    "28": [6, 36]
}


var iAI = 0; // index of array table
arrayTable[iAI] = firstTable
iAI += 1;

arrayTable

function removeValuesFromArray(array, arrayOmmit) {
    return array.filter(element => !arrayOmmit.includes(element));
}

cloneGuest = removeValuesFromArray(cloneGuest, firstTable);

for (let array of arrayPeopleTogether) {
    cloneGuest = removeValuesFromArray(cloneGuest, array);
}

console.log(cloneGuest);


const setPeopleTogether = () => {
    let j = 0;
    while (arrayPeopleTogether.length > 0 && iAI < maxCountTable) {
        settled = false;
        let array = arrayPeopleTogether[j]
        const iRandomTable = Math.floor(Math.random() * (maxCountTable - iAI + 1)) + iAI;
        //const iRandomTable = iAI;
        if (arrayTable[iRandomTable].length + array.length <= 10) {
            arrayTable[iRandomTable] = arrayTable[iRandomTable].concat(array);
            arrayPeopleTogether.splice(j, 1);
            //j++; // splice ile her seferinde ilk eleman siliniyor. j'yi arttırmaya geek yok. 

        } else {
            iAI++;
        }
    }
}
setPeopleTogether();

const setPeopleSeperate = () => {
    for (const key in peopleSeperate) {
        const person = parseInt(key);
        if (!cloneGuest.includes(person)) { // devetliler dizisinde yoksa yerleşmiş demektir
            continue;
        }

        // i = 1 çünkü 0. masa dolu
        for (let i = 1; i <= maxCountTable; i++) {
            if (arrayTable[i].length < maxTableSize && !arrayTable[i].some(item => peopleSeperate[key].includes(item))) {
                arrayTable[i].push(person);
                cloneGuest = cloneGuest.filter(element => { return element != person });
                break;
            }
        }
    }
}
setPeopleSeperate();


const setPeopleIndependent = () => {
    for (p of cloneGuest) {
        const person = parseInt(p);

        for (let i = 0; i <= maxCountTable; i++) {
            if (arrayTable[i].length < maxTableSize) {
                arrayTable[i].push(person);
                cloneGuest = cloneGuest.filter(element => { return element != person });
                break;
            }
        }
    }
}
setPeopleIndependent();

console.log("TABLES: ", JSON.stringify(arrayTable));