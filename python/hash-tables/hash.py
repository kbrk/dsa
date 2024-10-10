hashSet = [[]] * 20  # an hash set with a fixed size of ten elements
sampleList = [
    "Apple",
    "Banana",
    "Peach",
    "Plum",
    "Lemon",
    "Pineapple",
    "Coconut",
    "Olive",
    "Melon",
    "Kiwi",
    "Fig",
    "Grape",
]


# a simple hash function
def hash(value):
    sumofChars = 0
    for char in value:
        sumofChars += ord(char)
    hashValue = sumofChars % len(hashSet)
    return hashValue


for item in sampleList:
    hashSet[hash(item)].append(item)

item = "Fig"
hashValue = hash(item)
print("The index value of the item " + item + " is " + str(hashValue))