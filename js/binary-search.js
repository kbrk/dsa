

/**
 * @description returns a random number between min and max (both included)
 * @param {int} min
 * @param {int} max
 * @returns {array} random numeric array
 */
const randomNumericArray = (min, max) => {
    //returns an array from any iterable object
    return Array.from(
        { length: Math.floor(Math.random() * (20) + 1) }, () => Math.floor(Math.random() * (max - min + 1)) + min // by + 1, max included
    );
}

const binarySearch = (nums, numSearched) => {
    const iMid = Math.floor(nums.length / 2);
    const mid = nums[iMid];

    if (numSearched == mid) {
        return mid;
    }

    if (numSearched < mid) {
        return binarySearch(nums.slice(0, iMid), numSearched); // if the mid value is greater than the searched call the function with the greater numbers of the array
    }

    if (numSearched > mid) {
        return binarySearch(nums.slice(iMid+1), numSearched); // if the mid value is smaller than the searched call the function with the smaller numbers of the array
    }
}

let a = 1, b = null;
console.log(a&b);

// const nums = randomNumericArray(0, 100).sort(function (a, b) { return a - b }); //sorted random array
// const tmp = [...nums]
// const iSearched = Math.floor(Math.random() * (nums.length)); // randomly generated searched index
// const numSearched = nums[iSearched];

// console.log("Random Array: ", nums);
// console.log("Searched Number: ", numSearched);


// const result = binarySearch(tmp, numSearched);
// console.log("Result: ", result);