class HashSet {
    constructor(size) {
        this.size = size
        this.hashSet = Array.from({ length: size }, () => []); // hash set array with a fixed size of ten elements  
    }

    // a simple hash function that computes a hash value from the sum of the code value of each character of the value
    hashFunction(value) {
        let sumofChars = 0
        for (let char of value) {
            sumofChars += char.charCodeAt(0);
        }
        const hashValue = sumofChars % this.size;
        return hashValue;
    }

    add(value) {
        const indexHash = this.hashFunction(value);
        const bucket = this.hashSet[indexHash];
        if (bucket.includes(value)) {
            return `${value} is already present`;
        }
        bucket.push(value);
        return `${value} added`;
    }

    remove(value) {
        const indexHash = this.hashFunction(value);
        const bucket = this.hashSet[indexHash];
        if (!bucket.includes(value)) {
            return `${value} is not present`;
        }
        bucket.splice(bucket.findIndex((e) => value), 1);
        return `${value} removed`;
    }

    find(value) {
        const indexHash = this.hashFunction(value);
        const bucket = this.hashSet[indexHash];
        if (!bucket.includes(value)) {
            return `${value} is not present`;
        }
        return `The index value of the item ${value} is ${indexHash}.`;
    }

}

const hashSet = new HashSet(20);
console.log(hashSet.add('Apple'));
console.log(hashSet.add('Banana'));
console.log(hashSet.add('Peach'));
console.log(hashSet.add('Plum'));
console.log(hashSet.add('Fig'));
console.log(hashSet.add('Orange'));
console.log(hashSet.add('Lemon'));
console.log(hashSet.add('Olive'));
console.log(hashSet.add('Melon'));
console.log(hashSet.add('Melon'));
console.log(hashSet.add('Mango'));
console.log(hashSet.add('Coconut'));
console.log(hashSet.add('Pear'));
console.log(hashSet.add('Grape'));
console.log(hashSet.remove('Apple'));
console.log(hashSet.find('Apple'));
console.log(hashSet.find('Fig'));

