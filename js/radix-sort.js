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
        { length: Math.floor(Math.random() * (20) + 1) }, () => Math.floor(Math.random() * (max - min + 1)) + min // by + 1, max included
    );
}

// initial array of radix with index 0 to 9
var arrayRadix = Array.from(
    { length: 10 }, () => []
);

var exp = 1; // n's digit 

const radixSort = (nums) => {
    const max = Math.max(...nums); 
    
    while ( Math.floor(max / exp) > 0) {
        // a loop that takes values in nums array, find their exp's digits and pushes them to the related index in radix array
        while (nums.length > 0) {
            const value = nums.pop();
            const iRadix = Math.floor((value / exp)) % 10;
            arrayRadix[iRadix].push(value);
        }
        
        // a nested loop that takes values in the radix array and re-organize the nums array.
        for (let i = 0; i < 10; i++) {
            const arrayI = arrayRadix[i];
            while(arrayI.length > 0){
                nums.push(arrayI.pop());
            }
        }
        exp *= 10; // n*10's digit 
    }
    return nums;
}

const nums = randomNumericArray(0, 100);
console.log("Random Array: ", nums);
const sorted = radixSort(nums);
console.log("Sorted Array: ", sorted);

