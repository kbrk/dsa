/**
 * @description returns a random number between min and max (both included)
 * @param {int} min 
 * @param {int} max 
 * @param {int} n count of the array elelemts
 * @returns {array} random numeric array
 */
const randomNumericArray = (min, max, n = 1) => {
    //returns an array from any iterable object
    return Array.from(
        { length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min // by + 1, max included
    );
}

/**
 * @description Generate a count array with the initial values of zero.
 * 
 * @param {array} nums generated random numeric array
 * @returns {array} count array
 */
const getCountArray = (nums) => {
    const max = Math.max(...nums);
    // initialize the count array with all values as zero.
    let arrayCount = Array.from(
        { length: (max + 1) }, () => 0
    );

    //storing the count of each element at their indexes.
    nums.forEach(element => {
        arrayCount[element] = arrayCount[element] + 1;
    });

    return arrayCount;
}

const countingSort = (nums) => {
    let arrayResult = [];
    let arrayCount = getCountArray(nums);
    console.log("Count Array: ", arrayCount);

    for (let i = 0; i < arrayCount.length; i++) {
        if (arrayCount[i] > 0) {
            // Add the index values in the countArray to the result array as many times as their count.  
            for (let j = 0; j < arrayCount[i]; j++) {
                arrayResult.push(i);
            }
        }
    }
    return arrayResult;

}

const nums = randomNumericArray(0, 10, 10);
console.log("Random Array: ", nums);
const arrayResult = countingSort(nums);

console.log("Result Array: ", arrayResult);