/**
 * @description returns a random number between min and max (both included)
 * @param {int} min
 * @param {int} max
 * @param {int} n count of the array elelemts
 * @returns {array} random numeric array
 */
const randomNumericArray = (min, max) => {
    //returns an array from any iterable object
    return Array.from(
        { length: Math.floor(Math.random() * (8) + 1) }, () => Math.floor(Math.random() * (max - min + 1)) + min // by + 1, max included
    );
}

const merge = (left, right) => {
    console.log("Left: ", left, "Right: ", right);
    let sorted = [];
    let i = 0;
    let j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i += 1;
        } else {
            sorted.push(right[j]);
            j += 1;
        }
    }

    // merge the remaining parts of the arrays with the sorted array if there are any
    return sorted.concat(left.slice(i)).concat(right.slice(j))
}


const mergeSort = (nums) => {
    // divide until there is one element in the array.
    if (nums.length <= 1) {
        return nums;
    }
    
    const mid = Math.floor(nums.length / 2); // to divide the nums into two halves. 
    let left = nums.slice(0, mid); // the left half
    let right = nums.slice(mid); // the right half

    // recursively call mergeSort for the left and the right halves.
    return merge(mergeSort(left), mergeSort(right)); 
}

const nums = randomNumericArray(0, 100);
console.log("Random Array: ", nums);
const sorted = mergeSort(nums);
console.log("Sorted Array: ", sorted);