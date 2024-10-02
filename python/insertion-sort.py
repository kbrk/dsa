from randomNumericList import randomNumericList

def insertionSort():
    nums = randomNumericList()
    lengthNums = len(nums)

    for i in range(1, lengthNums):
        value = nums[i]
        iInsert = i
        for j in range(i-1, -1, -1):
            if nums[j] > value:
                iInsert = j
                nums[j+1] = nums[j]
        nums[iInsert] = value
    print(nums)

insertionSort()
