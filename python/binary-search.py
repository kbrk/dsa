import random
from randomNumericList import randomNumericList


def binarySearch(nums, numSearched):
    iMid = len(nums) // 2
    mid = nums[iMid]

    if numSearched == mid:
        return mid
    if numSearched < mid:
        return binarySearch(nums[:iMid], numSearched) # if the mid value is greater than the searched call the function with the greater numbers of the array
    if numSearched > mid:
        return binarySearch(nums[iMid:], numSearched) # if the mid value is smaller than the searched call the function with the smaller numbers of the array


nums = randomNumericList()
nums.sort() # sorted random array
print("Sorted Random Array: ", nums)

iSearched = round(random.random() * (len(nums) - 1)) # randomly generated searched index
numSearched = nums[iSearched]
print("Searched Number: ", numSearched)
result = binarySearch(nums, numSearched)
print("Result: ", result)
