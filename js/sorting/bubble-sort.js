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

var nums = [64, 34, 25, 12, 22, 11, 90, 5]; //randomNumericArray(0, 100, 7);

lengthNums = nums.length;
const bubbleSort = () => {
    let count = 0;
    for (let i = 0; i < lengthNums - 1; i++) {
        let swapped = false;
        for (let j = 0; j < lengthNums - i - 1; j++) {
            count++;
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j+1], nums[j]]
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
    console.log("Count: ", count);
}

bubbleSort();
console.log(nums)