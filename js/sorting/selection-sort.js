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

const selectionSort = (nums) => {
    const lengthNums = nums.length;
    for (let i = 0; i < lengthNums - 1; i++) {
        let min = nums[i];
        let iMin = i;
        for (let j = i + 1; j < lengthNums; j++) {
            if (nums[j] < min) {
                min = nums[j];
                iMin = j;
            }
        }
        nums[iMin] = nums[i]
        nums[i] = min;
    }
}

const nums = randomNumericArray(0, 100, 15);
console.log("Random Array: ", nums);
selectionSort(nums);
console.log("Sorted Array: ", nums);