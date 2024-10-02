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

const insertionSort = (nums) => {
    let count = 0;
    const lengthNums = nums.length;
    for (let i = 1; i <= lengthNums - 1; i++) {
        //let value = nums.pop(i); // pop ve splice islemleri yapildiginda geriye kalan tum elemanlar icin arka tarafta yer degistirme islemi yapilir. gereksiz islem
        let value = nums[i];
        let iInsert = i;
        for (let j = i - 1; j >= 0; j--) {
            count++;
            if (nums[j] > value) {
                iInsert = j
                nums[j+1] = nums[j] // pop yokken
            }
        }
        //nums.splice(iInsert, 0, value); // pop yapildiysa
        nums[iInsert] = value;
    }
    console.log("Count: ", count);
}

const nums = randomNumericArray(0, 100, 15);
console.log("Random Array: ", nums);
insertionSort(nums);
console.log("Sorted Array: ", nums);
