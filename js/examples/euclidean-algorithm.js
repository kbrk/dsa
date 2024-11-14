// Find the greatest common divisor of two numbers.
// a = (q * b) + r
// r == 0 => return b
// if r > 0 => euclidean(b, r);

const euclideanRecursive = (a, b) => {
    const q = Math.floor(a / b);
    const r = a - (q * b);

    if (r == 0) {
        return b;
    }

    return euclideanRecursive(b, r);
}

const euclideanLoop = (a, b) => {
    let q;
    let r;

    while (true) {
        q = Math.floor(a / b);
        r = a - (q * b);
        if (r == 0) {
            return b;
        }
        a = b;
        b = r;
    }
}

const a = 120;
const b = 25;
const resultRecursive = euclideanRecursive(a, b);
console.log(`Result recursive: ${resultRecursive}`);
const resultLoop = euclideanLoop(a, b);
console.log(`Result loop: ${resultLoop}`);