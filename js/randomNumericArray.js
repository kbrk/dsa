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