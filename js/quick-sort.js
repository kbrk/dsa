/**
 * 
 * @param {*} min 
 * @param {*} max 
 * @param {*} n count of the array elelemts
 * @returns 
 */
const randomNumericArray = (min, max, n = 1) =>
    Array.from(
        { length: n },
        () => Math.floor(Math.random() * (max - min + 1)) + min
    );

var count = 0;
const quickSort = (nums) => {
    if(nums.length <= 1){
        return nums;
    }
    const pivot = nums.pop(); // Let the pivot element is the last one.
    const lengthNums = nums.length;
    

    let arrayLower = []; // Has smaller elements than the pivot number.
    let arrayGreater = []; // Has greater or equal elements than the pivot number.

    for (let i = 0; i < lengthNums; i++) {
        count += 1;
        const n = nums[i];
        if (n < pivot) {
            arrayLower.push(n);
        } else {
            arrayGreater.push(n);
        }
    }

    return quickSort(arrayLower).concat([pivot]).concat(quickSort(arrayGreater)); // merge arrays recursively
}

const nums = randomNumericArray(0, 100, 7);
console.log("Random Array: ", nums);
$result = quickSort(nums);
console.log("Sorted Array: ", $result);
console.log("Count: ", count);