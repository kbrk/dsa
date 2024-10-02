from randomNumericList import randomNumericList

def selectionSort():
    nums = randomNumericList()
    lengthNums = len(nums)

    for i in range(lengthNums - 1):
        min = nums[i]
        iMin = i
        for j in range(i+1, lengthNums):
            if nums[j] < min:
                min = nums[j]
                iMin = j
        nums[iMin] = nums[i]
        nums[i] = min
    print(nums)

selectionSort()
