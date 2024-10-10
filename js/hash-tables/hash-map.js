class HashMap {
    constructor(size) {
        this.size = size
        this.hashMap = Array.from({ length: size }, () => []); // hash map array with a fixed size of ten elements
    }

    // a simple hash function that computes a hash value from the sum of each numeric character of the key
    hashFunction(key) {
        let sumofChars = 0
        for (let char of key) {
            if (Number.isInteger(parseInt(char))) {
                sumofChars += parseInt(char);
            }
        }
        const hashValue = sumofChars % this.size;
        return hashValue;
    }

    put(key, value) {
        const index = this.hashFunction(key);
        const bucket = this.hashMap[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] == key) {
                bucket[i] = [key, value];
                return;
            }
        }
        bucket.push([key, value]);
    }

    remove(key) {
        const index = this.hashFunction(key);
        const bucket = this.hashMap[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] == key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }

    find(key) {
        const index = this.hashFunction(key);
        const bucket = this.hashMap[index]; 

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] == key) {
                return `The key ${key} is in the index ${index}.`;
            }
        }
        return `The key ${key} is not present`;
    }

    printHashMap() {
        for (let i = 0; i < this.hashMap.length; i++) {
            const bucket = this.hashMap[i];
            if (bucket.length > 0) {
                console.log(`Index ${i}, bucket ${bucket}`);
            }

        }
    }
}

const hashMap = new HashMap(20);
hashMap.put("123-4567", "Charlotte")
hashMap.put("123-4568", "Thomas")
hashMap.put("123-4569", "Jens")
hashMap.put("123-4570", "Peter")
hashMap.put("123-4571", "Lisa")
hashMap.put("123-4672", "Adele")
hashMap.put("123-4573", "Michaela")
hashMap.put("123-6574", "Bob")

hashMap.printHashMap();

hashMap.remove("123-6574")

console.log("\n");
console.log("Hash Map after delete \n");
hashMap.printHashMap();

console.log("\n");
console.log(hashMap.find("123-4573"));